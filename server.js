import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";
import passport from "./src/auth/githubStrategy.js";

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
// Trust Proxy (Required for Render)
// ===============================

app.set("trust proxy", 1);


// ===============================
// Global Middleware
// ===============================

app.use(express.json());


app.use(
    cors({

        origin:
            process.env.NODE_ENV === "production"

                ? process.env.CLIENT_URL
                : "http://localhost:3000",

        credentials: true

    })
);


app.use(helmet());

app.use(morgan("dev"));


// ===============================
// Session Configuration
// ===============================

app.use(
    session({

        name: "bhid.sid",

        secret: config.sessionSecret,

        resave: false,

        saveUninitialized: false,

        cookie: {

            maxAge: 1000 * 60 * 60 * 24,

            httpOnly: true,

            secure:
                process.env.NODE_ENV === "production",

            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax"

        }

    })
);


// ===============================
// Passport Authentication
// ===============================

app.use(passport.initialize());

app.use(passport.session());


// ===============================
// Temporary Session Debugging
// Remove after fixing
// ===============================

app.use((req, res, next) => {

    console.log("SESSION ID:", req.sessionID);

    console.log(
        "AUTHENTICATED:",
        req.isAuthenticated()
    );

    console.log(
        "USER:",
        req.user?.email || "No User"
    );

    next();

});


// ===============================
// Swagger Documentation
// ===============================

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);


// ===============================
// API Routes
// ===============================

app.use("/api/v2", routes);


// ===============================
// Root Route
// ===============================

app.get("/", async (req, res, next) => {

    try {

        const databaseStatus =
            await checkDatabaseConnection();


        return successResponse(
            res,
            "Welcome to ByteHaven Identification System API",
            {

                project:
                    "ByteHaven Identification System",

                version:
                    "2.0.0",

                status:
                    "online",

                authentication:
                    req.isAuthenticated(),

                endpoints: {

                    api:
                        "/api/v2",

                    documentation:
                        "/api-docs",

                    health:
                        "/health"

                },

                database:
                    databaseStatus
                        ? "connected"
                        : "disconnected",

                timestamp:
                    new Date()

            },
            200
        );


    } catch(error) {

        next(error);

    }

});


// ===============================
// Health Check
// ===============================

app.get("/health", async (req, res, next) => {

    try {

        const databaseStatus =
            await checkDatabaseConnection();


        return successResponse(
            res,
            "API health check successful",
            {

                api:
                    "running",

                database:
                    databaseStatus
                        ? "healthy"
                        : "unhealthy",

                uptime:
                    process.uptime(),

                timestamp:
                    new Date()

            },
            200
        );


    } catch(error) {

        next(error);

    }

});


// ===============================
// 404 Handler
// ===============================

app.use((req, res) => {

    return res.status(404).json({

        success: false,

        message:
            "Route not found"

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

            console.log(
                "🚀 ByteHaven Identification API Started"
            );

            console.log("========================================");


            console.log(
                `🌍 Port: ${config.port}`
            );


            console.log(
                `📚 Swagger: /api-docs`
            );


            console.log(
                `🔗 API: /api/v2`
            );


            console.log(
                "✅ MongoDB Connected"
            );


            console.log("========================================");


        });


    } catch(error) {


        console.error(
            "❌ Failed to start server"
        );


        console.error(error);


        process.exit(1);

    }

}


startServer();