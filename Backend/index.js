import express from "express";
import cors from "cors;
import dotenv from "dotenv";

import auth from './Routes/Auth.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("api/route", auth);

app.listen(8000, () => {
    console.log("server is running");
});
