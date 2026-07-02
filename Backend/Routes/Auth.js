import express from "express";

import { signUp } from "./Controller/Authcontroller.js";

const router = express.Router();

router.use("/api/signup", signUp);

export default router;
