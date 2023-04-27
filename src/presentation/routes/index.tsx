import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Companies, Login } from '../view/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/empresas" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
