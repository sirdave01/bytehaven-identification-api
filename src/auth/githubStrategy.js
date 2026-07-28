import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

import {
    getUserByGithubId,
    getUserByEmail,
    createUser,
    updateUserByEmail,
    updateUserByGithubId
} from "../models/users.js";

import { config } from "../config/config.js";

passport.use(

  new GitHubStrategy(
  
    {
      clientID: config.githubClientId,

      clientSecret: config.githubClientSecret,

      callbackURL: "/api/v2/auth/github/callback",

    },

    async (accessToken, refreshToken, profile, done) => {

      try {
        return done(null, profile);

      } catch (error) {

        return done(error, null);
      }
    }
  )
);

// Store the user in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Restore the user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;