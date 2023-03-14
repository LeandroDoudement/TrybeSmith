import { ResultSetHeader } from 'mysql2';
import { NewUser, User } from '../interfaces';
import connection from './connection';

const createUser = async (user: NewUser): Promise<User> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const userModel = { createUser };

export default userModel;
