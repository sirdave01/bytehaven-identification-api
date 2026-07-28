// =======================================
// GitHub OAuth Strategy Configuration
// =======================================
// Handles authentication through GitHub
// and connects authenticated users with
// the BHID Users collection.

import passport from "passport";

import {
    Strategy as GitHubStrategy
} from "passport-github2";


// Application configuration
import { config } from "../config/config.js";


// User database operations
import {
    getUserByGithubId,
    getUserByEmail,
    createUser,
    updateUserByEmail,
    updateUserByGithubId
} from "../models/users.js";



// =======================================
// Configure GitHub Authentication Strategy
// =======================================

passport.use(

    new GitHubStrategy(

        {
            // GitHub OAuth credentials
            clientID: config.githubClientId,

            clientSecret: config.githubClientSecret,


            // GitHub redirects here after login
            callbackURL: config.githubCallbackUrl,
        },


        async (
            accessToken,
            refreshToken,
            profile,
            done
        ) => {


            try {


                // =======================================
                // Extract User Information From GitHub
                // =======================================

                const githubId = profile.id;


                const email =
                    profile.emails?.[0]?.value
                    || null;


                const firstName =
                    profile.name?.givenName
                    || profile.displayName?.split(" ")[0]
                    || "GitHub";


                const lastName =
                    profile.name?.familyName
                    || profile.displayName?.split(" ").slice(1).join(" ")
                    || "User";


                const username =
                    profile.username
                    || `github_${githubId}`;


                const avatar =
                    profile.photos?.[0]?.value
                    || null;



                // =======================================
                // Check If GitHub Account Already Exists
                // =======================================

                let user =
                    await getUserByGithubId(githubId);



                if (user) {


                    // Update login information
                    await updateUserByGithubId(

                        githubId,

                        {
                            avatar_url: avatar,
                            last_login: new Date()
                        }

                    );


                    // Retrieve updated user
                    user =
                        await getUserByGithubId(githubId);


                    return done(null, user);

                }



                // =======================================
                // Check Existing BHID Account By Email
                // =======================================
                // Prevents duplicate accounts if a user
                // already registered using the same email.

                if (email) {


                    user =
                        await getUserByEmail(email);


                    if (user) {


                        await updateUserByEmail(

                            email,

                            {
                                github_id: githubId,
                                provider: "github",
                                avatar_url: avatar,
                                last_login: new Date()
                            }

                        );


                        user =
                            await getUserByGithubId(githubId);


                        return done(null, user);

                    }

                }



                // =======================================
                // Create New BHID User
                // =======================================

                const newUser = {


                    first_name: firstName,


                    last_name: lastName,


                    username,


                    email,


                    // OAuth users do not have
                    // local passwords
                    password: null,


                    github_id: githubId,


                    provider: "github",


                    avatar_url: avatar,


                    status: "active",


                    last_login: new Date()

                };



                await createUser(newUser);



                // Retrieve newly created user
                user =
                    await getUserByGithubId(githubId);



                return done(null, user);



            } catch (error) {


                return done(error, null);

            }

        }

    )

);



// =======================================
// Store User In Session
// =======================================
// Called after successful authentication.

passport.serializeUser(

    (user, done) => {

        done(null, user._id);

    }

);



// =======================================
// Retrieve User From Session
// =======================================
// Called on every authenticated request.

passport.deserializeUser(

    async (id, done) => {


        try {


            const user =
                await import("../models/users.js")
                .then(module =>
                    module.getUserById(id)
                );


            done(null, user);


        } catch (error) {


            done(error, null);

        }

    }

);



export default passport;