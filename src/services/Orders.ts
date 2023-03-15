import { Order } from '../interfaces';
import ordersModel from '../models/Orders';

const getAllProducts = async (): Promise<Order[]> => {
  const allOrders = await ordersModel.getAllOrders();
  return allOrders;
};

const ordersService = { getAllProducts };

export default ordersService;
