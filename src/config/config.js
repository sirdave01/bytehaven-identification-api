import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    mongodbUri: process.env.MONGODB_URI,
    databaseName: process.env.DB_NAME,

    sessionSecret: process.env.SESSION_SECRET,
    jwtSecret: process.env.JWT_SECRET,

    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET
};