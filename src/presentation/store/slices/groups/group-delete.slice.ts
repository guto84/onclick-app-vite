import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GroupDeleteService } from '../../../../service'
import { toastSuccess } from '../../../view/utils'

export type GroupDeleteState = {
  modal: boolean
  loading: boolean
  id: string
}

export const groupDeleteInitialState: GroupDeleteState = {
  modal: false,
  loading: false,
  id: '',
}

export const groupDelete = createAsyncThunk(
  'companies/delete',
  async (id: string) => {
    const service = new GroupDeleteService()
    await service.execute(id)
  },
)

export const GroupDeleteSlice = createSlice({
  name: 'GroupDeleteSlice',
  initialState: groupDeleteInitialState,
  reducers: {
    setGroupDeleteModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setGroupDeleteLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setGroupDeleteId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(groupDelete.pending, (state) => {
        state.loading = true
      })
      .addCase(groupDelete.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Excluido com sucesso!')
      })
      .addCase(groupDelete.rejected, (state, payload) => {
        state.loading = false
        console.log(payload)
        // payload.response.data.message.map((item: string) => toastError(item))
      })
  },
})

export const { setGroupDeleteModal, setGroupDeleteLoading, setGroupDeleteId } =
  GroupDeleteSlice.actions

export default GroupDeleteSlice.reducer
