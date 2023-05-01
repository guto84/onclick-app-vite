import { UserCreateInput } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'

export class UserCreateService {
  async execute(input: UserCreateInput): Promise<void> {
    const data = {
      ...input,
      roles: input.roles.map((item: string) => ({
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
