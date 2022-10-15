import { Request, Response } from "express";
import { findAllMaterials, insertNewMaterial } from "../db/material.db";

// Get all materials
export async function getAllMaterials(req: Request, res: Response) {
  const result = await findAllMaterials();
  if (result) {
    console.log("[database] /GET materials success!");
    res.json(result);
  } else {
    console.log("[database] /GET materials failed!");
  }
}

// Create new material
export async function createNewMaterial(req: Request, res: Response) {
  const result = await insertNewMaterial(req.body);
  if (result) {
    console.log("😻 [database] /POST material success!");
    res.status(201).json({ _id: result._id });
  } else {
    res.status(500).statusMessage = "😿 [ server ] Internal server error";
    console.log("😿 [database] /POST material failed!");
  }
}
