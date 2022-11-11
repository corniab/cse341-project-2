import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
  res.render('pages/index', {
    name: 'Ben',
    title: 'Home',
  });
}
