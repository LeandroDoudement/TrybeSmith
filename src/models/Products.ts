import { ResultSetHeader } from 'mysql2';
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

const productsModel = { createProduct };

export default productsModel;
