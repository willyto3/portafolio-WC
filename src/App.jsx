// Importacion de Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// importacion del tema de la aplicacion
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Themes'
// importacion del estilo global
import { GlobalStyle } from './styles/GlobalStyle'
// importacion de las paginas
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Estudios from './pages/Estudios'
import Experiencia from './pages/Experiencia'
import Proyectos from './pages/Proyectos'
import Error404 from './pages/Error404'
// Importacion de los componentes
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/estudios' element={<Estudios />} />
          <Route path='/experiencia' element={<Experiencia />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
