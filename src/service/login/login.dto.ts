import { Login } from '../../domain'

export type InputLoginDto = {
  email: string
  password: string
}

export type OutputLoginDto = Login
