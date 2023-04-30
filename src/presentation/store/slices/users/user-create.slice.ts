import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastSuccess } from '../../../view/utils'
import { UserCreateInputDTO, UserCreateService } from '../../../../service'

export type UserCreateState = {
  modal: boolean
  loading: boolean
}

export const userCreateInitialState: UserCreateState = {
  modal: false,
  loading: false,
}

export const userCreate = createAsyncThunk(
  'users/create',
  async (input: UserCreateInputDTO) => {
    const service = new UserCreateService()
    await service.execute(input)
  },
)

export const UserCreateSlice = createSlice({
  name: 'UserCreateSlice',
  initialState: userCreateInitialState,
  reducers: {
    setUserCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setUserCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(userCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(userCreate.rejected, (state, payload) => {
        state.loading = false
        console.log(payload)
        // payload.response.data.message.map((item: string) => toastError(item))
      })
  },
})

export const { setUserCreateModal, setUserCreateLoading } =
  UserCreateSlice.actions

export default UserCreateSlice.reducer
