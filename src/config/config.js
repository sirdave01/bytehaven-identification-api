import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    mongodbUri: process.env.MONGODB_URI,
    databaseName: process.env.DB_NAME,
    jwtSecret: process.env.JWT_SECRET
};