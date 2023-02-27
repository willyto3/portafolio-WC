// Importacion de React Router Dom
import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../layout/LayoutPublic'
// Importacion de Paginas
import Home from '../pages/Home'
import Estudios from '../pages/Estudios'
import Experiencia from '../pages/Experiencia'
import Contacto from '../pages/Contacto'
import Proyectos from '../pages/Proyectos'
import Error404 from '../pages/Error404'

// Funcion Router
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        title: 'Inicio',
        element: <Home />,
      },
      {
        path: '/experiencia',
        title: 'Experiencia',
        element: <Experiencia />,
      },
      {
        path: '/estudios',
        title: 'Estudios',
        element: <Estudios />,
      },
      {
        path: '/contacto',
        title: 'Contacto',
        element: <Contacto />,
      },
      {
        path: '/proyectos',
        title: 'Proyectos',
        element: <Proyectos />,
      },
    ],
  },
])
