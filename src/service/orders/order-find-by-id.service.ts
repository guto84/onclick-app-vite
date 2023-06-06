import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { OrderConfigurations, OrderItem, OrderItemsOutput } from './types'

export class OrderFindByIdService {
  async execute(id: string): Promise<OrderItemsOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/orders/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await httpClientAdapter.request(httpRequest)
    const { data } = response

    return {
      id: data.id,
      name: data.name,
      address: data.address,
      addressNumber: data.addressNumber,
      addressComplement: data.addressComplement,
      district: data.district,
      zipcode: data.zipcode,
      phone: data.phone,
      status: data.status,
      total: data.total,
      orderItems: data.orderItems.map((item: OrderItem) => ({
        id: item.id,
        quantity: item.quantity,
        total: item.total,
        product: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
        },
        orderConfigurations: item.orderConfigurations.map(
          (config: OrderConfigurations) => ({
            id: config.id,
            name: config.name,
            description: config.description,
            price: config.price,
            configuration: {
              id: config.configuration.id,
              name: config.configuration.name,
              min: config.configuration.min,
              max: config.configuration.max,
            },
            quantity: config.quantity,
            total: config.total,
          }),
        ),
      })),
    }
  }
}
