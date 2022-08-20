import { Date, Schema } from 'mongoose';

export interface IProduct {
  title: string
  description: string
  department: string
  brand: string
  price: number
  qtd_stock: number
  bar_codes: string
}

export interface IProductResponse {
  title: string
  description: string
  department: string
  brand: string
  price: number
  qtd_stock: number
  bar_codes: string
  _id: Schema.Types.ObjectId
}
