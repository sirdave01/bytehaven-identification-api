import swaggerAutogen from "swagger-autogen";

import { userSchema } from "./schemas/userSchema.js";
import { roleSchema } from "./schemas/roleSchema.js";
import { applicationSchema } from "./schemas/applicationSchema.js";
import { systemSettingSchema } from "./schemas/systemSettingSchema.js";

const isProduction = process.env.NODE_ENV === "production";

const doc = {

    info: {
        title: "ByteHaven Identification System API",
        description:
            "REST API prototype for the ByteHaven Identification System (BHID).",
        version: "1.0.0"
    },

    host: process.env.SWAGGER_HOST || "localhost:3000",

    basePath: "/",

    schemes: [
        process.env.SWAGGER_SCHEME || "http"
    ],

    consumes: [
        "application/json"
    ],

    produces: [
        "application/json"
    ],

    definitions: {
        ...userSchema,
        ...roleSchema,
        ...applicationSchema,
        ...systemSettingSchema
    }
};

const outputFile = "./src/docs/swagger-output.json";

const endpointsFiles = [
    "./server.js"
];

swaggerAutogen()(outputFile, endpointsFiles, doc);