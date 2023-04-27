import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { CompanyFindByIdOutputDTO } from './company-find-by-id.dto'

export class CompanyFindByIdService {
  async execute(id: string): Promise<CompanyFindByIdOutputDTO> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies/${id}`,
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
      url: data.url,
    }
  }
}
