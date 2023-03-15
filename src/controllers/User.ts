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

const login = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const registeredUser = await userService.login(user);
    if (registeredUser) {
      const token = await generateToken(user);
      return res.status(200).json({ token });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const userController = { createUser, login };

export default userController;
