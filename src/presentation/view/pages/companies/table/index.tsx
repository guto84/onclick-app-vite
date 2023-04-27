import { useCallback, useEffect } from 'react'
import { Component } from './component'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { companyFindAll } from '../../../../store/slices/companies/company-find-all.slice'
import { setCompanyCreateModal } from '../../../../store/slices/companies/company-create.slice'
import {
  setCompanyDeleteId,
  setCompanyDeleteModal,
} from '../../../../store/slices/companies/company-delete.slice'
import {
  companyFindById,
  setCompanyUpdateModal,
} from '../../../../store/slices/companies/company-update.slice'

export const CompanyTable = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.companyFindAll)

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(companyFindAll())
  }, [])

  const handleCompanyCreateModal = (open: boolean) => {
    dispatch(setCompanyCreateModal(open))
  }

  const handleCompanyUpdateModal = (id: string) => {
    dispatch(setCompanyUpdateModal(true))
    dispatch(companyFindById(id))
  }

  const handleCompanyDeleteModal = (id: string) => {
    dispatch(setCompanyDeleteModal(true))
    dispatch(setCompanyDeleteId(id))
  }

  return (
    <Component
      list={selector.list}
      loading={selector.loading}
      handleCreateModal={handleCompanyCreateModal}
      handleUpdateModal={handleCompanyUpdateModal}
      handleDeleteModal={handleCompanyDeleteModal}
    />
  )
}
