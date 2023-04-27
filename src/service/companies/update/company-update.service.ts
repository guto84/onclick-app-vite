import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { CompanyUpdateInputDTO } from './company-update.dto'

export class CompanyUpdateService {
  async execute(id: string, input: CompanyUpdateInputDTO): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies/${id}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: input,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
