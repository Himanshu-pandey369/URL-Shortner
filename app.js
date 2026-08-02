import express from "express";
import urlRoutes from "./Routes/url.js";
import connectDB from "./config/dbconnect.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB();
app.use("/url", urlRoutes);
app.listen(3000);
