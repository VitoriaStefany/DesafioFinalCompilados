import { Schema, model, PaginateModel } from 'mongoose';
import { paginate } from 'mongoose-paginate-v2';
import { IProduct } from '../interfaces/IProduct';

const schema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  department: {type: String, required: true},
  brand: {type: String, required: true},
  price: {type: Number, required: true},
  qtd_stock: {type: Number, required: true},
  bar_codes: {type: String, required: true, unique: true}
},
{
  timestamps: {createdAt: 'created_at', updatedAt: 'update_at'}
}
);

const Product = model<IProduct, PaginateModel<IProduct>>('Product', schema);

export default Product;