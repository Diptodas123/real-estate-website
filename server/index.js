import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import connection from "./database/db.js";
import Routes from "./routes/route.js";

const app=express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use("/",Routes);
app.use("uploads",express.static("upload"));
const PORT=process.env.PORT;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

connection(username,password);

app.listen(PORT,()=>{
    console.log("Server running on PORT number 8000");
})
