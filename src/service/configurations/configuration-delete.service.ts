import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class ConfigurationDeleteService {
  async execute(id: string): Promise<void> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/configurations/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
    await httpClientAdapter.request(httpRequest)
  }
}
