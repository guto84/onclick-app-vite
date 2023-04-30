import { Role, User } from '../../../domain'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { CompanyFindByIdUsersOutputDTO } from './company-find-by-id-users.dto'

export class CompanyFindByIdUsersService {
  async execute(id: string): Promise<CompanyFindByIdUsersOutputDTO> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/companies/${id}/users`,
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
      users: data.users.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        roles: user.roles.map((role: Role) => ({
          id: role.id,
          rolename: role.rolename,
        })),
      })),
    }
  }
}
