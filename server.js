import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { config } from "./src/config/config.js";
import { connectDatabase, checkDatabaseConnection } from "./src/database/mongodb.js";


const app = express();


// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


// Root Route
app.get("/", async (req, res)=>{

    const databaseStatus = await checkDatabaseConnection();

    res.status(200).json({

        message: "Welcome to ByteHaven Identification System API",

        project: "BHID Prototype v0.1",

        status: "online",

        database: databaseStatus 
            ? "connected"
            : "disconnected",

        timestamp: new Date()

    });

});


// Health Check Route
app.get("/health", async(req,res)=>{

    const databaseStatus = await checkDatabaseConnection();


    res.status(200).json({

        api: "running",

        database:
            databaseStatus
            ? "healthy"
            : "unhealthy",

        uptime: process.uptime(),

        timestamp: new Date()

    });

});


// Start Server

async function startServer(){

    await connectDatabase();


    app.listen(config.port, ()=>{

        console.log(
            `🚀 BHID API running on port ${config.port}`
        );

        console.log(
            `🌍 Preview: http://localhost:${config.port}`
        );

        console.log(
            `❤️ Health Check: http://localhost:${config.port}/health`
        );

    });

}


startServer();