import express, { Request, Response } from "express";
import { getHomePage } from "../controllers/index.controllers";
import materialRouter from "./material.routes";
import diesRouter from "./die.routes";

const router = express.Router();

// Root path
router.get("/", getHomePage);

// Materials router
router.use("/materials", materialRouter);

// Dies router
router.use("/dies", diesRouter);

export default router;
