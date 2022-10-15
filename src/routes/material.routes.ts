import express from "express";
import {
  getAllMaterials,
  createNewMaterial,
} from "../controllers/material.controllers";

const materialRouter = express.Router();

// GET all materials
materialRouter.get("/", getAllMaterials);

// POST
materialRouter.post("/", createNewMaterial);

// PUT

// DELETE

export default materialRouter;
