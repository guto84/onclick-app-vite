import { Company } from '../../../domain'

export type CompanyCreateInputDTO = Omit<Company, 'id'>
