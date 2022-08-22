import { IProduct, IProductResponse } from '../interfaces/IProduct';
import ProductSchema from '../schema/ProductSchema';
import { PaginateResult } from 'mongoose';
import customLabels from '../utils/paginate';

class ProductRepository {
  async get (payload: any, page: any, limit: number): Promise<PaginateResult<IProduct>> {
    return ProductSchema.paginate(payload, {limit, page, customLabels})
  }

  async create (payload: IProduct) {
    return ProductSchema.create(payload);
  }

}

export default new ProductRepository();
