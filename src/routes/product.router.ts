import { Router } from 'express';
import ProductController from '../app/controller/ProductController';
import createValidation from '../app/validations/user/create';

const router = Router();

router.post('/api/v1/product', createValidation, ProductController.create); 

export default router;
