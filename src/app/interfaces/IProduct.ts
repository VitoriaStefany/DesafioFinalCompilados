import { Date, Schema } from 'mongoose';

export interface IProduct {
  title: string
  description: string
  department: string
  brand: string
  price: number
  qtd_stock: number
  stock_control_enabled: boolean
  bar_codes: string
}
export interface IProductResponse {
  title: string
  description: string
  department: string
  brand: string
  price: number
  qtd_stock: number
  stock_control_enabled: boolean
  bar_codes: string
  _id: Schema.Types.ObjectId
  created_at: string
  update_at: string
  __v?: false
}
