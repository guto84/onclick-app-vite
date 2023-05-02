import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  categoryFindById,
  groupFindAll,
  groupFindById,
  setCategoryCreateModal,
  setCategoryDeleteId,
  setCategoryDeleteModal,
  setCategoryUpdateModal,
  setGroupCreateModal,
  setGroupDeleteId,
  setGroupDeleteModal,
  setGroupId,
  setGroupUpdateModal,
} from '../../../../store/slices'

export const MenuManagerTable = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.groupFindAll)

  const handleCompanyFindAll = useCallback(async () => {
    await dispatch(groupFindAll())
  }, [])

  useEffect(() => {
    handleCompanyFindAll()
  }, [])

  const handleGroupCreateModal = (open: boolean) => {
    dispatch(setGroupCreateModal(open))
  }

  const handleGroupUpdateModal = (id: string) => {
    dispatch(setGroupUpdateModal(true))
    dispatch(groupFindById(id))
  }

  const handleGroupDeleteModal = (id: string) => {
    dispatch(setGroupDeleteModal(true))
    dispatch(setGroupDeleteId(id))
  }

  const handleCategoryCreateModal = (open: boolean, id: string) => {
    dispatch(setGroupId(id))
    dispatch(setCategoryCreateModal(open))
  }

  const handleCategoryUpdateModal = (id: string) => {
    dispatch(setCategoryUpdateModal(true))
    dispatch(categoryFindById(id))
  }

  const handleCategoryDeleteModal = (id: string) => {
    dispatch(setCategoryDeleteModal(true))
    dispatch(setCategoryDeleteId(id))
  }

  return (
    <Component
      list={selector.list}
      loading={selector.loading}
      handleGroupCreateModal={handleGroupCreateModal}
      handleGroupDeleteModal={handleGroupDeleteModal}
      handleGroupUpdateModal={handleGroupUpdateModal}
      handleCategoryCreateModal={handleCategoryCreateModal}
      handleCategoryDeleteModal={handleCategoryDeleteModal}
      handleCategoryUpdateModal={handleCategoryUpdateModal}
    />
  )
}
