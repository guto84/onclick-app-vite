import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { ProductOutput } from './types'

export class ProductFindByIdService {
  async execute(id: string): Promise<ProductOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/products/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)
    const { data } = response
    console.log(response.data.id)
    console.log(response.data.name)
    console.log(response.data.description)
    console.log(response.data.category.id)

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      category: {
        id: data.category.id,
      },
    }
  }
}
