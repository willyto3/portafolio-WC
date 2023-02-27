// Importacion del Hook de Error y Metodo Link
import { useRouteError, Link } from 'react-router-dom'

const Error404 = () => {
  const error = useRouteError()
  console.log('🚀 ~ file: Error404.jsx:7 ~ Error404 ~ error:', error)

  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>{error.statusText || error.message}</p>
      <Link to='/'>Volver al Home</Link>
    </div>
  )
}
export default Error404
