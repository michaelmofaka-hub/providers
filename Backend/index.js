import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./Config/db.js";
import Auth from "./Routes/Auth.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.get("/health", (req, res) => {
    res.status(201).json({ message: "ok" });
    console.log("welcome world");
});
app.use("api/", Auth);

const port = process.env.PORT;
app.listen(port, () => {
    connectDB();
    console.log(`server running on port ${port}`);
    console.log("health check in progress...");
});
