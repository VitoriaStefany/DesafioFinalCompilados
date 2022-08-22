import { IProduct, IProductResponse } from '../interfaces/IProduct';
import ProductSchema from '../schema/ProductSchema';
import { PaginateResult } from 'mongoose';
import customLabels from '../utils/paginate';

class ProductRepository {
  async get (payload: any, page: any, limit: number): Promise<PaginateResult<IProduct>> {
    return ProductSchema.paginate(payload, {limit, page, customLabels})
  }

  public async getById (id: string) {
    return ProductSchema.findById(id)
  }

  async create (payload: IProduct) {
    return ProductSchema.create(payload);
  }

}

export default new ProductRepository();
