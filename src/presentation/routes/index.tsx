import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Companies, CompanyUsers, Login, ProductManager } from '../view/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/empresas/:id/usuarios" element={<CompanyUsers />} />
        <Route path="/produtos" element={<ProductManager />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
