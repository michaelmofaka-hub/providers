import express from "express";

import { getJobs, createjob } from "../Controller/JobsController.js";

const router = express.Router();

router.get("/searchQ=?", getJobs);
router.post("/createjob", createjob);

export default router;