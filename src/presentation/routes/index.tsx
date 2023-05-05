import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Companies,
  CompanyUsers,
  Login,
  MenuManager,
  ConfigManager,
} from '../view/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/empresas/:id/usuarios" element={<CompanyUsers />} />
        <Route path="/cardapios" element={<MenuManager />} />
        <Route
          path="/cardapios/categorias/:id/configuracoes"
          element={<ConfigManager />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
