import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Login, NewUser, User } from '../interfaces';
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

const getUser = async (user: Login): Promise<Login> => {
  const { username } = user;
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT username, password FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  const { username: resultUsername, password } = result[0] as Login;
  return { username: resultUsername, password };
};

const userModel = { createUser, getUser };

export default userModel;
