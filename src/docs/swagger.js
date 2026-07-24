import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "ByteHaven Identification System API",
        description:
            "REST API prototype for the ByteHaven Identification System (BHID). Developed as a CRUD API with MongoDB, validation, and authentication-ready architecture.",
        version: "1.0.0"
    },

    host: "localhost:3000",

    schemes: ["http"],

    consumes: ["application/json"],

    produces: ["application/json"],

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
    "./server.js",
    "./src/routes/index.js",
    "./src/routes/userRoutes.js",
    "./src/routes/roleRoutes.js",
    "./src/routes/applicationRoutes.js",
    "./src/routes/systemSettingRoutes.js"
];

swaggerAutogen()(outputFile, endpointsFiles, doc);