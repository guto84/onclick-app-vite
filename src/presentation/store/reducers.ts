import companyCreateReducer from '../store/slices/companies/company-create.slice'
import companyFindAllReducer from '../store/slices/companies/company-find-all.slice'
import companyDeleteReducer from '../store/slices/companies/company-delete.slice'
import companyFindByIdUsersReducer from '../store/slices/companies/company-find-by-id-users.slice'
import companyUpdateReducer from '../store/slices/companies/company-update.slice'

import roleFindAllReducer from '../store/slices/roles/role.find-all.slice'

import userCreateReducer from '../store/slices/users/user-create.slice'
import userDeleteReducer from '../store/slices/users/user-delete.slice'
import userUpdateReducer from '../store/slices/users/user-update.slice'

export const reducers = {
  companyCreate: companyCreateReducer,
  companyFindAll: companyFindAllReducer,
  companyDelete: companyDeleteReducer,
  companyFindByIdUsers: companyFindByIdUsersReducer,
  companyUpdate: companyUpdateReducer,

  roleFindAll: roleFindAllReducer,

  userCreate: userCreateReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
}
