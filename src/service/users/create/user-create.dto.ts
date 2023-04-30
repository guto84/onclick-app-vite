export type UserCreateInputDTO = {
  name: string
  email: string
  password: string
  company: {
    id: string
  }
  roles: string[]
}
