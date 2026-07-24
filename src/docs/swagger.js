import swaggerAutogen from "swagger-autogen";

const isProduction = process.env.NODE_ENV === "production";

const doc = {

    info: {
        title: "ByteHaven Identification System API",
        description:
            "REST API prototype for the ByteHaven Identification System (BHID). Developed as a CRUD API with MongoDB, validation, and authentication-ready architecture.",
        version: "1.0.0"
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

    tags: [
        {
            name: "Users",
            description: "User Management"
        },
        {
            name: "Roles",
            description: "Role Management"
        },
        {
            name: "Applications",
            description: "Registered Applications"
        },
        {
            name: "System Settings",
            description: "System Configuration"
        }
    ]
};

const outputFile = "./src/docs/swagger-output.json";

const endpointsFiles = [
    "./server.js"
];

swaggerAutogen()(outputFile, endpointsFiles, doc);