// Importacion de React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importacion del Router
import { router } from './router'
// Importacion del Router Provider
import { RouterProvider } from 'react-router-dom'
// importacion del tema de la aplicacion
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Themes'
// importacion del estilo global
import { GlobalStyle } from './styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
