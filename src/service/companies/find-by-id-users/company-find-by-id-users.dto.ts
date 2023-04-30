import { User } from '../../../domain'

export type CompanyFindByIdUsersOutputDTO = {
  id: string
  name: string
  url: string
  users: User[]
}
