import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./Config/db.js";
import Auth from "./Routes/Auth.js";
// import JobsRoutes from "./Routes/JobsRoutes.js";


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

try {
  await connectDB();
} catch (error) {
  console.log("db connection failed");
}

app.get("/health", (req, res) => {
    res.status(200).json({ message: "ok" });
    console.log("welcome world");
});
app.use("/api/", Auth);
// app.use("/api/", JobsRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    try {
        console.log(`server running on port ${port}`);
        console.log("health check in progress...");
    } catch (error) {
        console.log("500 error");
    }
});
