import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import {
  GroupCategoriesProductsOutput,
  GroupCategoriesProductsService,
} from '../../../../service'

export type GroupFindAllState = {
  loading: boolean
  list: GroupCategoriesProductsOutput[]
}

export const groupFindAllInitialState: GroupFindAllState = {
  loading: true,
  list: [],
}

export const groupFindAll = createAsyncThunk('groups/findAll', async () => {
  const service = new GroupCategoriesProductsService()
  const response = await service.execute()
  return response
})

export const GroupFindAllSlice = createSlice({
  name: 'GroupFindAllSlice',
  initialState: groupFindAllInitialState,
  reducers: {
    setGroupList: (
      state,
      action: PayloadAction<GroupCategoriesProductsOutput[]>,
    ) => {
      state.list = action.payload
    },
    setGroupListLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(groupFindAll.pending, (state) => {
        state.loading = true
      })
      .addCase(groupFindAll.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(groupFindAll.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setGroupList, setGroupListLoading } = GroupFindAllSlice.actions

export default GroupFindAllSlice.reducer
