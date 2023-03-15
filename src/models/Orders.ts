import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute<Order[] & RowDataPacket[]>(
    `SELECT 
        orders.id, 
        orders.user_id AS userId, 
        JSON_ARRAYAGG(products.id) AS productsIds
    FROM 
        Trybesmith.orders
    LEFT JOIN
        Trybesmith.products
        ON
        orders.id = products.order_id
    GROUP BY
        orders.id;
`
  );
  return result;
};

const ordersModel = { getAllOrders };

export default ordersModel;
