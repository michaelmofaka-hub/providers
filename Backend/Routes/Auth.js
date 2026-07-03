import express from "express";

import { signup } from "../Controller/Authcontroller.js";

const router = express.Router();

router.use("/api/signup", signup);

export default router;
