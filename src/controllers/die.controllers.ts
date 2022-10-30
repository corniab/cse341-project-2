import { Request, Response } from "express";
import * as db from "../db/die.db";
import { requestError } from "../exceptions/routes.exceptions";
import { validationResult } from "express-validator/src/validation-result";
// Get all Dies
export async function getAllDies(req: Request, res: Response) {
  const result = await db
    .findAllDies()
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Get by id
export async function getDieById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .findDieById(req.params.id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Create new Die
export async function createNewDie(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .insertNewDie(req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(201).json({ _id: result._id });
  else res.sendStatus(404);
}

// Update Die
export async function updateDieById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .updateDie(req.params.id, req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result != null && result.acknowledged && result.modifiedCount > 0)
    res.sendStatus(204);
  else res.sendStatus(404);
}

// Delete Die
export async function deleteDieById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .deleteDie(req.params.id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result != null && result.acknowledged && result.deletedCount > 0)
    res.sendStatus(200);
  else res.sendStatus(404);
}
