import { IProductResponse, IProduct } from '../interfaces/IProduct';
import ProductRepository from '../repository/ProductRepository';
import BadRequestError from '../errors/BadRequestError'


class ProductService {


  public async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductRepository.create(payload);

    if(!result) throw new BadRequestError('Product not created')

    return result;
  }
}

export default new ProductService();
