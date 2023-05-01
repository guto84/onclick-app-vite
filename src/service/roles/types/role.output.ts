export type RoleOutput = {
  id: string
  rolename: RoleName
}

export enum RoleName {
  ROLE_ADMIN,
  ROLE_PROVIDER,
  ROLE_USER,
}
