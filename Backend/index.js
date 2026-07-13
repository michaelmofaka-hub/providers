import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./Config/db.js";
import Auth from "./Routes/Auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/health", (req, res) => {
    res.status(200).json({ message: "ok" });
    console.log("welcome world");
});
app.use("/api/", Auth);

const port = process.env.PORT | 8000;
app.listen(port, () => {
    try {
        connectDB();
        console.log(`server running on port ${port}`);
        console.log("health check in progress...");
    } catch (error) {
        console.log("500 error");
      }
    }
});
