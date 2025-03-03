import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import exphbs from "express-handlebars";
import logger from 'morgan';

import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL; // Fix typo here

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());


// Database Connection
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database connected successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.error("Database connection error:", error));

// Static files
app.use(express.static("public"));

// Template Engine
const handlebars = exphbs.create({ extname: "hbs" });
app.engine('hbs', handlebars.engine);
app.set("view engine", "hbs");

// Routes
app.use("/api/user", userRoute); // User API routes



