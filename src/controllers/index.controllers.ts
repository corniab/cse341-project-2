import { Request, Response } from 'express';

type PageData = {
  title: string;
  name?: string;
};

export function getHomePage(req: Request, res: Response) {
  const pageData: PageData = {
    title: 'Home',
    name: undefined,
  };

  if (req.user) {
    pageData.name = req.user.givenName;
  }

  res.render('pages/index', pageData);
}
