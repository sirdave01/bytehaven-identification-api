// =======================================
// Authentication Middleware
// =======================================
// Protects routes that require a logged-in user.
//
// Passport creates req.isAuthenticated()
// after successful authentication.
//
// If the user is authenticated:
//      continue to the next middleware/controller
//
// If not authenticated:
//      return 401 Unauthorized response


import { errorResponse } from "../utils/response.js";



export const isAuthenticated = (req, res, next) => {


    // =======================================
    // Check Passport Authentication Status
    // =======================================

    if (req.isAuthenticated()) {


        // User is logged in
        // Continue request processing

        return next();

    }



    // =======================================
    // Reject Unauthenticated Requests
    // =======================================

    return errorResponse(
        res,
        401,
        "Authentication required. Please login first."
    );


};