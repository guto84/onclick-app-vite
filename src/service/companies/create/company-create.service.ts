import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { CompanyCreateInputDTO } from './company-create.dto'

export class CompanyCreateService {
  async execute(input: CompanyCreateInputDTO): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data: input,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
