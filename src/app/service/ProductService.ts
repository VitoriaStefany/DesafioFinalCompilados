import { IProductResponse, IProduct } from '../interfaces/IProduct';
import ProductRepository from '../repository/ProductRepository';
import BadRequestError from '../errors/BadRequestError'
import { PaginateResult } from 'mongoose';

class ProductService {
  public async get(payload: any, page: any, limit: number): Promise<PaginateResult<IProduct>> {
    const query: {[key:string]: object | boolean | number} = {}
    const result = await ProductRepository.get(query, page || 1, limit || 50)
    const Product: any = result.Product 

    return result;
  }

  public async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductRepository.create(payload);

    if(!result) throw new BadRequestError('Product not created')

    return result;
  }
}

export default new ProductService();
