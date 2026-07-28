import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // We'll save or update the user in MongoDB later.
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