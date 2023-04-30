import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { UserCreateInputDTO } from './user-create.dto'

export class UserCreateService {
  async execute(input: UserCreateInputDTO): Promise<void> {
    const data = {
      ...input,
      roles: input.roles.map((item) => ({
        id: item,
      })),
    }
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/users`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      data,
    }
    await httpClientAdapter.request(httpRequest)
  }
}
