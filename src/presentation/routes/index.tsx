import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../view/pages'

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesRoot
