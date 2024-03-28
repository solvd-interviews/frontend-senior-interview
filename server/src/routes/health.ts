import express from "express";

import { checkServicesHealth } from "../handlers/health";

const router = express.Router();

router.get("/", checkServicesHealth);

export default router;
