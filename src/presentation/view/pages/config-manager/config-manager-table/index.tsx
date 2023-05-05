import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  categoryFindByIdConfigsItems,
  configurationFindById,
  productFindById,
  setCategoryCreateModal,
  setConfigurationCreateModal,
  setConfigurationDeleteId,
  setConfigurationDeleteModal,
  setConfigurationUpdateModal,
  setGroupId,
  setProductDeleteId,
  setProductDeleteModal,
  setProductUpdateModal,
} from '../../../../store/slices'
import { useParams } from 'react-router-dom'
import { Loading, Toast } from '../../../components'

export const ConfigManagerTable = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.categoryFindByIdConfigsItems)

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(categoryFindByIdConfigsItems(params.id || ''))
  }, [])

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleConfigCreateModal = (open: boolean) => {
    dispatch(setConfigurationCreateModal(open))
  }

  const handleConfigUpdateModal = (id: string) => {
    dispatch(setConfigurationUpdateModal(true))
    dispatch(configurationFindById(id))
  }

  const handleConfigDeleteModal = (id: string) => {
    dispatch(setConfigurationDeleteModal(true))
    dispatch(setConfigurationDeleteId(id))
  }

  const handleCategoryCreateModal = (open: boolean, id: string) => {
    dispatch(setGroupId(id))
    dispatch(setCategoryCreateModal(open))
  }

  const handleProductUpdateModal = (id: string) => {
    dispatch(setProductUpdateModal(true))
    dispatch(productFindById(id))
  }

  const handleProductDeleteModal = (id: string) => {
    dispatch(setProductDeleteModal(true))
    dispatch(setProductDeleteId(id))
  }

  return (
    <>
      <Component
        category={selector.category}
        handleConfigCreateModal={handleConfigCreateModal}
        handleConfigDeleteModal={handleConfigDeleteModal}
        handleConfigUpdateModal={handleConfigUpdateModal}
        handleCategoryCreateModal={handleCategoryCreateModal}
        handleProductUpdateModal={handleProductUpdateModal}
        handleProductDeleteModal={handleProductDeleteModal}
      />
      <Loading loading={selector.loading} />
      <Toast />
    </>
  )
}
