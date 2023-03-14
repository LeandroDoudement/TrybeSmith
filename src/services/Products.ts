import { NewProduct, Product } from '../interfaces';
import productsModel from '../models/Products';

const createProduct = async (product: NewProduct): Promise<Product> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const productsService = { createProduct, getAllProducts };

export default productsService;
