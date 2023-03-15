import { Request, Response } from 'express';
import ordersService from '../services/Orders';

const getAllOrders = async (req: Request, res: Response) => {
  const allOrders = await ordersService.getAllProducts();
  return res.status(200).json(allOrders);
};

const ordersController = { getAllOrders };

export default ordersController;
