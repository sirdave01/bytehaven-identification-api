// =======================================
// Authentication Controller
// =======================================
// Handles authentication-related actions:
// - GitHub OAuth callback response
// - Login failure response
// - Logout
// - Current authenticated user
// =======================================


import { asyncHandler } from "../middleware/asyncHandler.js";



// =======================================
// GitHub Authentication Success
// =======================================
// Called after Passport successfully
// authenticates a GitHub user.
//
// User is already stored in req.user
// and the session has been created.

export const githubCallbackSuccess = (req, res) => {


    return res.redirect(
        "/api-docs"
    );


};



// =======================================
// GitHub Authentication Failure
// =======================================
// Redirect target when GitHub login fails.

export const loginFailed = (req, res) => {


    return res.status(401).json({

        success: false,

        message:
            "GitHub authentication failed."

    });


};



// =======================================
// Logout User
// =======================================
// Removes Passport authentication,
// destroys session,
// and clears browser cookie.

export const logout = asyncHandler(async (req, res, next) => {


    req.logout((err) => {


        if (err) {

            return next(err);

        }



        req.session.destroy((error) => {


            if (error) {

                return next(error);

            }



            res.clearCookie(
                "connect.sid"
            );



            return res.status(200).json({

                success: true,

                message:
                    "Logged out successfully."

            });


        });


    });


});



// =======================================
// Get Current Authenticated User
// =======================================
// Used by:
// GET /api/v2/auth/me
//
// Returns the currently logged-in user.

export const currentUser = (req, res) => {


    if (!req.user) {


        return res.status(401).json({

            success: false,

            message:
                "User is not authenticated."

        });


    }



    return res.status(200).json({

        success: true,

        data: req.user

    });


};