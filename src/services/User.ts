import { NewUser, User } from '../interfaces';
import userModel from '../models/User';

const createUser = async (user: NewUser): Promise<User> => {
  const newUser = await userModel.createUser(user);
  return newUser;
};

const userService = { createUser };

export default userService;
