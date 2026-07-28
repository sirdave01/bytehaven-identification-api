// =======================================
// Swagger Documentation Configuration
// =======================================
// Generates OpenAPI documentation for BHID API.
//
// Includes:
// - API information
// - Environment configuration
// - Data schemas
// - Authentication definition
// =======================================


import swaggerAutogen from "swagger-autogen";


// Database schemas
import { userSchema } from "./schemas/userSchema.js";
import { roleSchema } from "./schemas/roleSchema.js";
import { applicationSchema } from "./schemas/applicationSchema.js";
import { systemSettingSchema } from "./schemas/systemSettingSchema.js";



// Detect environment

const isProduction =
    process.env.NODE_ENV === "production";



// =======================================
// Swagger Document Configuration
// =======================================

const doc = {


    info: {

        title:
            "ByteHaven Identification System API",

        description:
            "REST API prototype for the ByteHaven Identification System (BHID).",

        version:
            "1.0.0"

    },



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
    // Authentication Configuration
    // =======================================
    // Passport uses express-session.
    // The authenticated session is stored
    // in a browser cookie.

    securityDefinitions: {
        
    cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "connect.sid",
        description:
            "Passport session cookie generated after GitHub login."
        }
    },



    definitions: {

        ...userSchema,

        ...roleSchema,

        ...applicationSchema,

        ...systemSettingSchema

    }

};



// =======================================
// Swagger Output Location
// =======================================

const outputFile =
    "./src/docs/swagger-output.json";



// =======================================
// Files Swagger Should Scan
// =======================================

const endpointsFiles = [

    "./server.js"

];



// Generate Swagger JSON

swaggerAutogen()(
    outputFile,
    endpointsFiles,
    doc
);