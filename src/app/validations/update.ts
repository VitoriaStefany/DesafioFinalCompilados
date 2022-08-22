import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required().trim(),
      description: Joi.string().required().trim(),
      department: Joi.string().required().trim(),
      brand: Joi.string().required().trim(),
      price: Joi.number().optional().greater(0).less(1001),
      qtd_stock: Joi.number().optional().greater(0).less(100001)
    })

    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error: any) {
    return res.status(400).json({
      message: 'Bad Request Error',
      details: [
        {
          message: error.message
        }
      ]
    });
  }
};