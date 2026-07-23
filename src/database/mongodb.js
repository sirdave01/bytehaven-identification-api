import { MongoClient } from "mongodb";
import { config } from "../config/config.js";


let database;


export async function connectDatabase() {

    try {

        const client = new MongoClient(config.mongodbUri);

        await client.connect();

        database = client.db(config.databaseName);

        console.log("MongoDB connected successfully");

    } catch (error) {

        console.error("MongoDB connection failed:", error.message);

        process.exit(1);
    }
}


export function getDatabase() {

    if (!database) {
        throw new Error("Database not initialized");
    }

    return database;
}