export type UserRolesOutput = {
  id: string
  name: string
  email: string
  roles: {
    id: string
    rolename: Role
  }[]
}

type Role = {
  id: string
  rolename: string
}
