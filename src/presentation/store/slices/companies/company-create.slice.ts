import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CompanyCreateInputDTO,
  CompanyCreateService,
} from '../../../../service'
import { toastSuccess } from '../../../view/utils'

export type CompanyCreateState = {
  modal: boolean
  loading: boolean
}

export const companyCreateInitialState: CompanyCreateState = {
  modal: false,
  loading: false,
}

export const companyCreate = createAsyncThunk(
  'companies/create',
  async (input: CompanyCreateInputDTO) => {
    const service = new CompanyCreateService()
    await service.execute(input)
  },
)

export const CompanyCreateSlice = createSlice({
  name: 'CompanyCreateSlice',
  initialState: companyCreateInitialState,
  reducers: {
    setCompanyCreateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCompanyCreateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyCreate.pending, (state) => {
        state.loading = true
      })
      .addCase(companyCreate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Cadastrado com sucesso!')
      })
      .addCase(companyCreate.rejected, (state, payload) => {
        state.loading = false
        console.log(payload)
        // payload.response.data.message.map((item: string) => toastError(item))
      })
  },
})

export const { setCompanyCreateModal, setCompanyCreateLoading } =
  CompanyCreateSlice.actions

export default CompanyCreateSlice.reducer