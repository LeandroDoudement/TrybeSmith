import { NewProduct, Product } from '../interfaces';
import productsModel from '../models/Products';

const createProduct = async (product: NewProduct): Promise<Product> => {
  const newProduct = await productsModel.createProduct(product);
  return newProduct;
};

const productsService = { createProduct };

export default productsService;
