import jwt, { SignOptions } from 'jsonwebtoken';
import { NewUser } from '../interfaces';

const { JWT_SECRET } = process.env;

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1h',
};

const generateToken = (payload: NewUser) =>
  jwt.sign(payload, JWT_SECRET as string, JWT_CONFIG);

export default generateToken;
