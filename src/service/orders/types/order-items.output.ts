import { StatusEnum } from './status.enum'

export type OrderItemsOutput = {
  id: string
  name: string
  address: string
  addressNumber: string
  addressComplement?: string
  district: string
  zipcode: string
  phone: string
  status: StatusEnum
  total: number
  orderItems: OrderItem[]
}

export type OrderItem = {
  id: string
  quantity: number
  total: number
  product: {
    id: string
    name: string
    description?: string
    price?: number
  }
  orderConfigurations: OrderConfigurations[]
}

export type OrderConfigurations = {
  id: string
  name: string
  description?: string
  price: number
  configuration: {
    id: string
    name: string
    min: number
    max: number
  }
  quantity: number
  total: number
}
