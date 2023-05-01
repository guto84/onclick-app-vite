import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Component } from './component'
import {
  groupFindAll,
  groupFindById,
  setGroupCreateModal,
  setGroupDeleteId,
  setGroupDeleteModal,
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

  return (
    <Component
      list={selector.list}
      loading={selector.loading}
      handleGroupCreateModal={handleGroupCreateModal}
      handleGroupDeleteModal={handleGroupDeleteModal}
      handleGroupUpdateModal={handleGroupUpdateModal}
    />
  )
}
