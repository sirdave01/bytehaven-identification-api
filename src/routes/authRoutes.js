import { Router } from "express";
import passport from "../auth/githubStrategy.js";

import {
    githubCallbackSuccess,
    loginFailed,
    logout,
    currentUser
} from "../controllers/authController.js";

const router = Router();

router.get(
    "/github",
    passport.authenticate("github", {
        scope: ["user:email"]
    })
);

router.get(
    "/github/callback",
    passport.authenticate("github", {
        failureRedirect: "/api/v1/auth/login-failed",
        session: true
    }),
    githubCallbackSuccess
);

router.get("/logout", logout);

router.get("/login-failed", loginFailed);

router.get("/me", currentUser);

export default router;