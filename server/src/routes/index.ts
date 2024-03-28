import express from "express";

import healthRouter from "./health";
import charactersRouter from "./characters";

const router = express.Router();

router.use("/health", healthRouter);

router.use("/characters", charactersRouter);

export default router;
