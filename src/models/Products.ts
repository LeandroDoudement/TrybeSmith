import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, Product } from '../interfaces';
import connection from './connection';

const createProduct = async (product: NewProduct): Promise<Product> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)`,
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute<Product[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

const productsModel = { createProduct, getAllProducts };

export default productsModel;
