import { CompanyCreateInputDTO } from '../../../../../service'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  companyCreate,
  setCompanyCreateModal,
} from '../../../../store/slices/companies/company-create.slice'
import { companyFindAll } from '../../../../store/slices/companies/company-find-all.slice'
import { Component } from './component'

export const CompanyCreate = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyCreate)

  const handleCompanyCreate = async (
    input: CompanyCreateInputDTO,
  ): Promise<void> => {
    await dispatch(companyCreate(input))
    await dispatch(companyFindAll())
  }

  const handleCompanyCreateModal = (open: boolean) => {
    dispatch(setCompanyCreateModal(open))
  }

  return (
    <>
      <Component
        open={selector.modal}
        loading={selector.loading}
        handleOpen={handleCompanyCreateModal}
        handleCompanyCreate={handleCompanyCreate}
      />
    </>
  )
}
