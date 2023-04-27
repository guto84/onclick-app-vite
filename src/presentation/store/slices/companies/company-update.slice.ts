import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError, toastSuccess } from '../../../view/utils'
import {
  CompanyFindByIdOutputDTO,
  CompanyFindByIdService,
  CompanyUpdateInputDTO,
  CompanyUpdateService,
} from '../../../../service'

export type CompanyUpdateState = {
  modal: boolean
  loading: boolean
  values: CompanyFindByIdOutputDTO
}

export const companyUpdateInitialState: CompanyUpdateState = {
  modal: false,
  loading: false,
  values: {
    id: '',
    name: '',
    url: '',
  },
}

type Props = {
  id: string
  input: CompanyUpdateInputDTO
}

export const companyFindById = createAsyncThunk(
  'companies/findById',
  async (id: string) => {
    const service = new CompanyFindByIdService()
    const response = await service.execute(id)
    return response
  },
)

export const companyUpdate = createAsyncThunk(
  'companies/update',
  async ({ id, input }: Props) => {
    const service = new CompanyUpdateService()
    await service.execute(id, input)
  },
)

export const CompanyUpdateSlice = createSlice({
  name: 'CompanyUpdateSlice',
  initialState: companyUpdateInitialState,
  reducers: {
    setCompanyUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload
    },
    setCompanyUpdateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyFindById.pending, (state) => {
        state.loading = true
      })
      .addCase(companyFindById.fulfilled, (state, action) => {
        state.values = action.payload
        state.loading = false
      })
      .addCase(companyFindById.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })

      .addCase(companyUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(companyUpdate.fulfilled, (state) => {
        state.modal = false
        state.loading = false
        toastSuccess('Editado com sucesso!')
      })
      .addCase(companyUpdate.rejected, (state, payload) => {
        state.loading = false
        console.log(payload)
        // payload.response.data.message.map((item: string) => toastError(item))
      })
  },
})

export const { setCompanyUpdateModal, setCompanyUpdateLoading } =
  CompanyUpdateSlice.actions

export default CompanyUpdateSlice.reducer
