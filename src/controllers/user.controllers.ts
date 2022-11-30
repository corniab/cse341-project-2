import User from '../db/user.db';
import { Request, Response } from 'express';
import { requestError } from '../exceptions/routes.exceptions';

export default {
  get: async (req: Request, res: Response) => {
    const result = await User.find({}).catch((error) =>
      requestError(error, res)
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  },
  getOne: async (req: Request, res: Response) => {
    const result = await User.findById(req.params.id).catch((error) =>
      requestError(error, res)
    );

    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  },
  post: async (req: Request, res: Response) => {
    const result = await User.create(req.body).catch((error) =>
      requestError(error, res)
    );

    if (result) {
      res.status(201).json({ _id: result._id });
    } else {
      res.sendStatus(404);
    }
  },
  put: async (req: Request, res: Response) => {
    const result = await User.updateOne({ _id: req.params.id }, req.body).catch(
      (error) => requestError(error, res)
    );

    if (result != null && result.acknowledged && result.modifiedCount > 0)
      res.sendStatus(204);
    else res.sendStatus(404);
  },
  delete: async (req: Request, res: Response) => {
    const result = await User.deleteOne({ _id: req.params.id }).catch((error) =>
      requestError(error, res)
    );

    // Send result if it exists.
    if (result != null && result.acknowledged && result.deletedCount > 0)
      res.sendStatus(200);
    else res.sendStatus(404);
  },
};
