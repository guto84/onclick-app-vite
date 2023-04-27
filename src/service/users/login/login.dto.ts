import { Login } from '../../../domain'

export type InputLoginDTO = {
  email: string
  password: string
}

export type OutputLoginDTO = Login
