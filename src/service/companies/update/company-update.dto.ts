import { Company } from '../../../domain'

export type CompanyUpdateInputDTO = Omit<Company, 'id'>
