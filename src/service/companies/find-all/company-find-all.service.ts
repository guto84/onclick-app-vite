import { Company } from '../../../domain'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { CompanyFindAllOutputDTO } from './company-find-all.dto'

export class CompanyFindAllService {
  async execute(): Promise<CompanyFindAllOutputDTO> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: Company) => ({
      id: item.id,
      name: item.name,
      url: item.url,
    }))
  }
}
