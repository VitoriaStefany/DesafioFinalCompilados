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

  public async updatePut (ProductId:string, Payload: IProduct) {
    return ProductSchema.findByIdAndUpdate(ProductId, Payload, {new: true}).select('-tock_control_enabled').select('-bar_codes').select('-_id').select(-'timestamps')
  }

  public async delete (id: string): Promise<void> {
    await ProductSchema.findByIdAndDelete(id)
  }
}

export default new ProductRepository();
