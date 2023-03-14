import { Request, Response } from 'express';
import userService from '../services/User';
import generateToken from '../auth/Token';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  if (newUser) {
    const token = generateToken(newUser);
    console.log('Token', token);
    return res.status(201).json({ token });
  }
};

const userController = { createUser };

export default userController;
