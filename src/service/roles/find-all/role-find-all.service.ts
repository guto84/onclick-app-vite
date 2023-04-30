import { Role } from '../../../domain'
import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { RoleFindAllOutputDTO } from './role-find-all.dto'

export class RoleFindAllService {
  async execute(): Promise<RoleFindAllOutputDTO> {
    const httpRequest: HttpRequest = {
      url: `${envAdapter.apiUrl}/roles`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }

    const response = await httpClientAdapter.request(httpRequest)

    return response.data.map((item: Role) => ({
      id: item.id,
      rolename: item.rolename,
    }))
  }
}
