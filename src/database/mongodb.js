import { MongoClient } from "mongodb";
import { config } from "../config/config.js";


let database;
let client;


export async function connectDatabase() {

    try {

        client = new MongoClient(config.mongodbUri);

        await client.connect();

        database = client.db(config.databaseName);

        console.log("✅ MongoDB connected successfully");

    } catch (error) {

        console.error("❌ MongoDB connection failed:", error.message);

        process.exit(1);
    }
}


export function getDatabase() {

    if (!database) {
        throw new Error("Database not connected");
    }

    return database;
}


export async function checkDatabaseConnection(){

    try {

        await client.db("admin").command({
            ping: 1
        });

        return true;

    } catch(error){

        return false;

    }

}