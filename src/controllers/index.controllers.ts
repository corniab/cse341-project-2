import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
  const pageData = {
    title: 'Home',
    firstName: undefined,
    lastName: undefined,
  };

  console.log(req.cookies.userInfo);
  if (req.cookies.userInfo) {
    const userInfo = JSON.parse(req.cookies.userInfo);
    pageData.firstName = userInfo.givenName;
    pageData.lastName = userInfo.familyName;
  }

  res.render('pages/index', pageData);
}
