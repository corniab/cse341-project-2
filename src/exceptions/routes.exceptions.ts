import { Request, Response } from "express";

export function requestError(error: any, res: Response) {
  let message = error;
  if (error instanceof Error) {
    message = {
      type: error.name,
      message: error.message,
    };
  }
  res.status(500).json({ Error: message });
}
