import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { UserUpdateInputDTO } from './user-update.dto'

export class UserUpdateService {
  async execute(id: string, input: UserUpdateInputDTO): Promise<void> {
    const data = {
      ...input,
      roles: input.roles.map((item) => ({
        id: item,
      })),
    }
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/users/${id}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
