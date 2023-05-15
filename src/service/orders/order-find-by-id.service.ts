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
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
            id: config.configurationItems.id,
            name: config.configurationItems.name,
            description: config.configurationItems.description,
            price: config.configurationItems.price,
            configuration: {
              id: config.configurationItems.configuration.id,
              name: config.configurationItems.configuration.name,
              min: config.configurationItems.configuration.min,
              max: config.configurationItems.configuration.max,
            },
            quantity: config.quantity,
            total: config.total,
          }),
        ),
      })),
    }
  }
}
