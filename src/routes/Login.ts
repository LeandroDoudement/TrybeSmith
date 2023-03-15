import { Router } from 'express';
import userController from '../controllers/User';
import {
  verifyLoginCredentials,
  verifyUsernameAndPassword,
} from '../middlewares';

const router = Router();

router.get(
  '/',
  verifyUsernameAndPassword,
  verifyLoginCredentials,
  userController.login,
);

export default router;
