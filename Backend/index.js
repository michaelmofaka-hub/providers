import express from "express";
import cors from "cors";

import connectDB from "./Config/db.js";
import Auth from "./Routes/Auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.get("api/routes", Auth);

port = 8000;
app.listen(port, () => {
    connectDB();
    console.log(`server running on port ${port}`);
});
