import express, { Request, Response } from "express";
import { getHomePage } from "../controllers/index.controllers";
import materialRouter from "./material.routes";

const router = express.Router();

// Root path
router.get("/", getHomePage);

// Materials router
router.use("/materials", materialRouter);

export default router;
