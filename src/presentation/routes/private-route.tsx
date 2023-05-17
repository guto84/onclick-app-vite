import { Navigate } from 'react-router-dom'

type Props = {
  children: React.ReactElement
  role: string
}

export const PrivateRoute = ({ children, role }: Props) => {
  const handleRoute = (roles: string) => {
    if (!localStorage.getItem('roles')) {
      return false
    }
    return Boolean(
      roles.includes(JSON.parse(localStorage.getItem('roles') || '')),
    )
  }

  return handleRoute(role) ? children : <Navigate to="/login" replace />
}
