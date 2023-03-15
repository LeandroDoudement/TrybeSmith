import { Router } from 'express';
import ordersController from '../controllers/Orders';

const router = Router();

router.get('/', ordersController.getAllOrders);

export default router;
