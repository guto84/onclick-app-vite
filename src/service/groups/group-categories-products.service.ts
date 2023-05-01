import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import {
  Category,
  GroupCategoriesProductsOutput,
  Product,
} from './types/group-categories-products.output'

export class GroupCategoriesProductsService {
  async execute(): Promise<GroupCategoriesProductsOutput[]> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/groups/categories/products`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: GroupCategoriesProductsOutput) => ({
      id: item.id,
      name: item.name,
      categories: item.categories.map((item: Category) => ({
        id: item.id,
        name: item.name,
        products: item.products.map((item: Product) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
        })),
      })),
    }))
  }
}
