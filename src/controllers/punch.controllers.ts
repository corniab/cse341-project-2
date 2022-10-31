import { Request, Response } from "express";
import * as db from "../db/punch.db";
import { requestError } from "../exceptions/routes.exceptions";
import { validationResult } from "express-validator/src/validation-result";
// Get all Dies
export async function getAllPunches(req: Request, res: Response) {
  const result = await db
    .findAllPunches()
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Get by id
export async function getPunchById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .findPunchById(req.params.id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(200).json(result);
  else res.sendStatus(404);
}

// Create new Punch
export async function createNewPunch(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .insertNewPunch(req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result) res.status(201).json({ _id: result._id });
  else res.sendStatus(404);
}

// Update Punch
export async function updatePunchById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .updatePunch(req.params.id, req.body)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result != null && result.acknowledged && result.modifiedCount > 0)
    res.sendStatus(204);
  else res.sendStatus(404);
}

// Delete Punch
export async function deletePunchById(req: Request, res: Response) {
  // Validate request inputs
  const errors = validationResult(req);
  if (errors.isEmpty() === false) {
    return res.status(400).json({ errors: errors.array() });
  }

  const result = await db
    .deletePunch(req.params.id)
    .catch((error) => requestError(error, res));

  // Send result if it exists.
  if (result != null && result.acknowledged && result.deletedCount > 0)
    res.sendStatus(200);
  else res.sendStatus(404);
}
