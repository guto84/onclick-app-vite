import { LoginInput, Role } from '..'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../infra/adapters'
import { LoginOutput } from './types'

export class LoginService {
  async execute(input: LoginInput): Promise<LoginOutput> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/login`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: input.email,
        password: input.password,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)
    const roles: Role[] = []
    response.data.roles.map((role: any) => roles.push(role.rolename))

    return {
      accessToken: response.data.token,
      roles: JSON.stringify(roles),
    }
  }
}
