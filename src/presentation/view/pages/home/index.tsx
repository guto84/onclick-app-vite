import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Link to="lanchonete">Cardápio</Link>
      <Link to="empresas">Admin</Link>
      <Link to="cardapios">Provider</Link>
    </>
  )
}
