import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toastError } from '../../../view/utils'
import {
  CompanyFindByIdUsersOutputDTO,
  CompanyFindByIdUsersService,
} from '../../../../service'

export type CompanyFindByIdUsersState = {
  loading: boolean
  company: CompanyFindByIdUsersOutputDTO
}

export const companyFindByIdUsersInitialState: CompanyFindByIdUsersState = {
  loading: true,
  company: {
    id: '',
    name: '',
    url: '',
    users: [],
  },
}

export const companyFindByIdUsers = createAsyncThunk(
  'users/findByIdUsers',
  async (id: string) => {
    const service = new CompanyFindByIdUsersService()
    const response = await service.execute(id)
    return response
  },
)

export const CompanyFindByIdUsersSlice = createSlice({
  name: 'CompanyFindByIdUsersSlice',
  initialState: companyFindByIdUsersInitialState,
  reducers: {
    setCompany: (
      state,
      action: PayloadAction<CompanyFindByIdUsersOutputDTO>,
    ) => {
      state.company = action.payload
    },
    setCompanyLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(companyFindByIdUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(companyFindByIdUsers.fulfilled, (state, action) => {
        state.company = action.payload
        state.loading = false
      })
      .addCase(companyFindByIdUsers.rejected, (state) => {
        state.loading = false
        toastError('Erro ao buscar dados, tente novamente!')
      })
  },
})

export const { setCompany, setCompanyLoading } =
  CompanyFindByIdUsersSlice.actions

export default CompanyFindByIdUsersSlice.reducer
