import { Request, Response } from "express";
import * as db from "../db/material.db";
import { requestError } from "../exceptions/routes.exceptions";
import { validationResult } from "express-validator/src/validation-result";

// Get all materials
export async function getAllMaterials(req: Request, res: Response) {
  const result = await db
    .findAllMaterials()
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Get by id
export async function getMaterialById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const result = await db
    .findMaterialById(id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Create new material
export async function createNewMaterial(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .insertNewMaterial(req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(201).json({ _id: result._id });
  else res.sendStatus(404);
}

// Update material
export async function updateMaterialById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .updateMaterial(req.params.id, req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.sendStatus(204);
  else res.sendStatus(404);
}

// Delete material
export async function deleteMaterialById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .deleteMaterial(req.params.id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.sendStatus(200);
  else res.sendStatus(404);
}
