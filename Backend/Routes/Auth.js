import express from "express";

import { signin } from "../Controller/Authcontroller.js";

const router = express.Router();

router.post("/api/signin", signin);

export default router;
