import express, { Request, Response, NextFunction } from 'express';
import config from '../config/app';
import User from '../db/user.db';

export async function loadUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers.authorization) {
    const authZeroUser = await fetchAuthZeroUser(req.headers.authorization);

    const user = await findOrCreateUser(authZeroUser);
  }
  next();
}

// Helper
async function fetchAuthZeroUser(authorizationValue: any) {
  const response = await fetch(`${config.authorizationHost}/userinfo`, {
    headers: { Authorization: authorizationValue },
  });
  return response.json();
}

async function findOrCreateUser(authZeroJson: any) {
  if (!authZeroJson) return;

  const existingUser = await User.findOne({ identifer: authZeroJson.sub });

  if (existingUser) return existingUser;

  const newUser = await User.create({
    identifer: authZeroJson.sub,
    email: authZeroJson.email,
    givenName: authZeroJson.given_name,
    familyName: authZeroJson.family_name,
    locale: authZeroJson.locale,
    picture: authZeroJson.picture,
  });

  return newUser;
}
