import {
  HttpRequest,
  envAdapter,
  httpClientAdapter,
} from '../../../infra/adapters'
import { InputLoginDTO, OutputLoginDTO } from './login.dto'

export class LoginService {
  async execute(input: InputLoginDTO): Promise<OutputLoginDTO> {
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

    return {
      accessToken: response.data.token,
    }
  }
}
