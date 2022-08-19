import { IProduct, IProductResponse } from '../interfaces/IProduct';
import ProductSchema from '../schema/ProductSchema';

class ProductRepository {
  async create (payload: IProduct) {
    return ProductSchema.create(payload);
  }

}

export default new ProductRepository();
