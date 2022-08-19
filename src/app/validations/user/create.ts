import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      department: Joi.string().required(),
      brand: Joi.string().required(),
      price: Joi.number().required().greater(0.01),
      qtd_stock: Joi.number().required(),
      bar_codes: Joi.string().required()
    })

    const { error } = await schema.validate(req.body, { abortEarly: true });
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