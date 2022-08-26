import { Router } from 'express';
import ProductController from '../app/controller/ProductController';
import createValidation from '../app/validations/create';
import updateValidation from '../app/validations/update';

const router = Router();
router.get('/api/v1/product', ProductController.get);
router.get('/api/v1/product/:id', ProductController.getById); 
router.post('/api/v1/product', createValidation, ProductController.create); 
router.put('/api/v1/product/:id', updateValidation, ProductController.updatePut); 
router.delete('/api/v1/product/:id', ProductController.delete); 


export default router;