import { IProduct } from '../interfaces/IProduct';
import ProductRepository from '../repository/ProductRepository';
import BadRequestError from '../errors/BadRequestError'
import { PaginateResult, Types } from 'mongoose';
import NotFoundError from '../errors/NotFoundError'
class ProductService {
  public async get(payload: any, page: any, limit: number): Promise<PaginateResult<IProduct>> {
    const query: {[key:string]: object | boolean | number} = {}
    const result = await ProductRepository.get(query, page || 1, limit || 50)
    const Product: any = result.Product 

    return result;
  }

  public async getById (id: string) {
    if (!Types.ObjectId.isValid(id)) throw new BadRequestError('Product is not valid')
    const result = await ProductRepository.getById(id)

    if (!result) throw new NotFoundError('Product not found')

    return result
  }

  public async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductRepository.create(payload);

    if(!result) throw new BadRequestError('Product not created')

    return result;
  }
}

export default new ProductService();
