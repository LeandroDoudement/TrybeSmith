import { Router } from 'express';
import productsController from '../controllers/Products';

const router = Router();

router.post('/', productsController.createProduct);

export default router;
