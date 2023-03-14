import { Request, Response } from 'express';
import productsService from '../services/Products';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = await productsService.createProduct(product);
  return res.status(201).json(newProduct);
};

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  return res.status(200).json(allProducts);
};

const productsController = { createProduct, getAllProducts };

export default productsController;
