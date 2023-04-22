import { useNavigate } from 'react-router-dom'
import { LoginComponent } from './component'
import { InputLoginDto, LoginService } from '../../../../service'
import { toast } from 'react-toastify'

export const Login = () => {
  const navigate = useNavigate()

  const handleLogin = async (body: InputLoginDto): Promise<void> => {
    try {
      const service = new LoginService()
      const response = await service.execute(body)
      localStorage.setItem('accessToken', JSON.stringify(response.accessToken))
      navigate('/')
    } catch (error) {
      toast.error('Erro ao fazer login, tente novamente!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }
  return <LoginComponent handleLogin={handleLogin} />
}
