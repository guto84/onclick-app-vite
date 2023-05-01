import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastSuccess } from '../../../view/utils'
import { GroupCreateInput, GroupCreateService } from '../../../../service'

export type GroupCreateState = {
  modal: boolean
  loading: boolean
}

export const groupCreateInitialState: GroupCreateState = {
  modal: false,
  loading: false,
}

export const groupCreate = createAsyncThunk(
  'companies/create',
  async (input: GroupCreateInput) => {
    const service = new GroupCreateService()
    await service.execute(input)
  },
)

export const GroupCreateSlice = createSlice({
  name: 'GroupCreateSlice',
  initialState: groupCreateInitialState,
  reducers: {
    setGroupCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setGroupCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(groupCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(groupCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(groupCreate.rejected, (state, payload) => {
        state.loading = false
        console.log(payload)
        // payload.response.data.message.map((item: string) => toastError(item))
      })
  },
})

export const { setGroupCreateModal, setGroupCreateLoading } =
  GroupCreateSlice.actions

export default GroupCreateSlice.reducer
