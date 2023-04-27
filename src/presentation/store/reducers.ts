import companyCreateReducer from '../store/slices/companies/company-create.slice'
import companyFindAllReducer from '../store/slices/companies/company-find-all.slice'
import companyDeleteReducer from './slices/companies/company-delete.slice'
import companyUpdateReducer from '../store/slices/companies/company-update.slice'

export const reducers = {
  companyCreate: companyCreateReducer,
  companyFindAll: companyFindAllReducer,
  companyDelete: companyDeleteReducer,
  companyUpdate: companyUpdateReducer,
}
