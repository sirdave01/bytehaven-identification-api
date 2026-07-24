import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { config } from "./src/config/config.js";
import {
    connectDatabase,
    checkDatabaseConnection
} from "./src/database/mongodb.js";

import { successResponse } from "./src/utils/response.js";
import { errorHandler } from "./src/middleware/errorHandler.js";
import routes from "./src/routes/index.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./src/docs/swagger-output.json" with { type: "json" };

const app = express();


// ===============================
// Global Middleware
// ===============================

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);


// ===============================
// API Routes
// ===============================

app.use("/api/v1", routes);


// ===============================
// Root Route
// ===============================

app.get("/", async (req, res, next) => {

    try {

        const databaseStatus = await checkDatabaseConnection();

        return successResponse(
            res,
            "Welcome to ByteHaven Identification System API",
            {
                project: "BHID Prototype v0.1",
                version: "1.0.0",
                status: "online",

                endpoints: {
                    api: "/api/v1",
                    documentation: "/api-docs",
                    health: "/health"
                },

                database: databaseStatus
                    ? "connected"
                    : "disconnected",

                timestamp: new Date()
            },
            200
        );

    } catch (error) {

        next(error);

    }

});


// ===============================
// Health Check
// ===============================

app.get("/health", async (req, res, next) => {

    try {

        const databaseStatus = await checkDatabaseConnection();

        return successResponse(
            res,
            "API health check successful",
            {
                api: "running",
                database: databaseStatus
                    ? "healthy"
                    : "unhealthy",
                uptime: process.uptime(),
                timestamp: new Date()
            },
            200
        );

    } catch (error) {

        next(error);

    }

});


// ===============================
// 404 Handler
// ===============================

app.use((req, res) => {

    return res.status(404).json({
        success: false,
        message: "Route not found"
    });

});


// ===============================
// Global Error Handler
// ===============================

app.use(errorHandler);


// ===============================
// Start Server
// ===============================

async function startServer() {

    try {

        await connectDatabase();

        app.listen(config.port, () => {

            console.log("========================================");
            console.log("🚀 ByteHaven Identification API Started");
            console.log("========================================");
            console.log(`🌍 Server         : http://localhost:${config.port}`);
            console.log(`❤️ Health         : http://localhost:${config.port}/health`);
            console.log(`📚 Swagger Docs   : http://localhost:${config.port}/api-docs`);
            console.log(`🔗 REST API       : http://localhost:${config.port}/api/v1`);
            console.log(`🔗 REST API       : http://localhost:${config.port}/api/v1/users`);
            console.log(`🔗 REST API       : http://localhost:${config.port}/api/v1/roles`);
            console.log(`🔗 REST API       : http://localhost:${config.port}/api/v1/applications`);
            console.log(`🔗 REST API       : http://localhost:${config.port}/api/v1/system-settings`);
            console.log("✅ MongoDB        : Connected");
            console.log("========================================");

        });

    } catch (error) {

        console.error("❌ Failed to start server");
        console.error(error);

        process.exit(1);

    }

}

startServer();