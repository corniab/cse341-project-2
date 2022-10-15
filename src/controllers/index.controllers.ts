import { Request, Response } from "express";

export function getHomePage(req: Request, res: Response) {
  res.send("Ben Cornia!");
}
