// Importacion de Outlet y el Hook Use Navigation de React Router
import { Outlet, useNavigation } from 'react-router-dom'
// Importacion de Componentes
import Footer from '../components/Footer'
import Header from '../components/Header'

const LayoutPublic = () => {
  const navigation = useNavigation()

  return (
    <main>
      <Header />
      <main>
        {navigation.state === 'loading' && <h1>Cargando...</h1>}
        <Outlet />
      </main>
      <Footer />
    </main>
  )
}
export default LayoutPublic
