import express, { Request, Response } from 'express';
import config from '../config/app';

export function login(req: Request, res: Response) {
  const authorizationURL = `${
    config.authorizationHost
  }/authorize?response_type=code&client_id=${
    config.clientId
  }&redirect_uri=${encodeURIComponent(
    config.redirectUrl
  )}&state=1234&scope=openid%20profile%20email`;

  res.redirect(authorizationURL);
}

export async function callback(req: Request, res: Response) {
  const response = await fetch(`${config.authorizationHost}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: config.redirectUrl,
      scope: 'openid profile email',
      code: req.query.code as string,
    }),
  });

  const jsonResponse = await response.json();
  res.send(jsonResponse.access_token);
}
