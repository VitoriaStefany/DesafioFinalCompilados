import { Router } from 'express';
import ProductController from '../app/controller/ProductController';
import createValidation from '../app/validations/user/create';

const router = Router();
router.get('/api/v1/product', ProductController.get);
router.get('/api/v1/product/:id', ProductController.getById); 
router.post('/api/v1/product', createValidation, ProductController.create); 

export default router;
