import { Login, NewUser, User } from '../interfaces';
import userModel from '../models/User';

const createUser = async (user: NewUser): Promise<User> => {
  const newUser = await userModel.createUser(user);
  return newUser;
};

const login = async (user: Login): Promise<Login> => {
  const registeredUser = await userModel.getUser(user);
  return registeredUser;
};

const userService = { createUser, login };

export default userService;
