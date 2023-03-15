import { Request, Response, NextFunction } from 'express';
import userModel from '../models/User';

export const verifyUsernameAndPassword = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'username is required' });
  }
  if (!password) {
    return res.status(400).json({ message: 'password is required' });
  }
  next();
};

export const verifyLoginCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = req.body;
  const { username, password } = user;
  const registeredUser = await userModel.getUser(user);
  if (username !== registeredUser.username) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  if (password !== registeredUser.password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  next();
};
