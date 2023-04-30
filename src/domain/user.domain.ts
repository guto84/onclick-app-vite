import { Role } from '.'

export type User = {
  id: string
  name: string
  email: string
  roles: Role[]
}
