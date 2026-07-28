// =======================================
// Swagger Documentation Configuration
// =======================================
// Generates OpenAPI documentation for BHID API.
//
// Includes:
// - API information
// - Environment configuration
// - Data schemas
// =======================================

import swaggerAutogen from "swagger-autogen";

// =======================================
// Import Swagger Schemas
// =======================================

import { userSchema } from "./schemas/userSchema.js";
import { roleSchema } from "./schemas/roleSchema.js";
import { applicationSchema } from "./schemas/applicationSchema.js";
import { systemSettingSchema } from "./schemas/systemSettingSchema.js";

// =======================================
// Detect Current Environment
// =======================================

const isProduction = process.env.NODE_ENV === "production";

// =======================================
// Swagger Document Configuration
// =======================================

const doc = {

    info: {

        title: "ByteHaven Identification System API",

        description: `
REST API prototype for the ByteHaven Identification System (BHID).

=========================================================
AUTHENTICATION
=========================================================

This API uses GitHub OAuth authentication through Passport.js.

Before testing protected endpoints:

1. Visit:
   /api/v2/auth/github

2. Sign in with your GitHub account.

3. After successful authentication, GitHub will redirect you
   back to the Swagger documentation.

4. You can now access all protected endpoints.

Logout:
   /api/v2/auth/logout

Current Authenticated User:
   /api/v2/auth/me

---------------------------------------------------------
NOTE
---------------------------------------------------------

This API uses Passport Session Authentication.

No JWT or API key is required.

The browser automatically stores the authentication session
after a successful GitHub login.
`,

        version: "2.0.0"

    },

    // =======================================
    // Host Configuration
    // =======================================

    host: isProduction
        ? "bytehaven-identification-api.onrender.com"
        : "localhost:3000",

    basePath: "/",

    schemes: isProduction
        ? ["https"]
        : ["http"],

    consumes: [
        "application/json"
    ],

    produces: [
        "application/json"
    ],

    // =======================================
    // Swagger Schemas
    // =======================================

    definitions: {

        ...userSchema,
        ...roleSchema,
        ...applicationSchema,
        ...systemSettingSchema

    }

};

// =======================================
// Output File
// =======================================

const outputFile = "./src/docs/swagger-output.json";

// =======================================
// Files to Scan
// =======================================

const endpointsFiles = [

    "./server.js"

];

// =======================================
// Generate Swagger Documentation
// =======================================

swaggerAutogen()(outputFile, endpointsFiles, doc);