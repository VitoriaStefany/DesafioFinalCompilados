import { IProduct } from 'app/interfaces/IProduct';
import {Request, Response} from 'express'
import ProductService from '../service/ProductService';

class ProductController {
  public async create (req: Request, res: Response): Promise<Response> {
    try {
      const payload: IProduct = req.body
      const result = await ProductService.create(payload)
      return res.status(201).json(result)
    } catch (error: any) {
      return res.status(error.statusCode || 400).json({
        message: error.name,
        details: [
          {message: error.message}
        ]
      })
    }
  }
}

export default new ProductController();
