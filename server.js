import express from "express";
import { config } from "./src/config/config.js";
import { connectDatabase } from "./src/database/mongodb.js";


const app = express();


app.use(express.json());


app.get("/", (req, res)=>{

    res.json({
        message: "ByteHaven Identification System API running"
    });

});


connectDatabase();


app.listen(config.port, ()=>{

    console.log(
        `BHID API running on port ${config.port}`
    );

});