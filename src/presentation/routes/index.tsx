import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Companies,
  CompanyUsers,
  Login,
  MenuManager,
  ConfigManager,
  Orders,
  Menu,
} from '../view/pages'
import { PrivateRoute } from './private-route'
import { authCollection } from './auth-collection'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/empresas"
          element={
            <PrivateRoute role={authCollection.admin}>
              <Companies />
            </PrivateRoute>
          }
        />
        <Route
          path="/empresas/:id/usuarios"
          element={
            <PrivateRoute role={authCollection.admin}>
              <CompanyUsers />
            </PrivateRoute>
          }
        />
        <Route
          path="/cardapios"
          element={
            <PrivateRoute role={authCollection.provider}>
              <MenuManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/cardapios/categorias/:id/configuracoes"
          element={
            <PrivateRoute role={authCollection.provider}>
              <ConfigManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/pedidos"
          element={
            <PrivateRoute role={authCollection.provider}>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route path="/cardapios/:url" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
