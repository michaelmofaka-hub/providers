import express from "express";

import { signin, login } from "../Controller/Authcontroller.js";

const router = express.Router();

router.post("/auth/signin", signin);
router.post("/auth/login", login);

export default router;
