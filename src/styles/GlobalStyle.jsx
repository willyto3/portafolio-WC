// importamos la funcion createGlobalStyle
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* eliminamos los margenes y el padding, implementamos el border box y usamos fuentes globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:Montserrat, sans-serif;
  font-weight:400;
}

/* implementamos que 1rem sea igual a 10px y ocultamos la barra de navegacion en el eje x */
html {
  font-size: 62.5%;
  overflow-x: hidden;
}

h1{
  font-family: Merriweather, "Work Sans", sans-serif;
  font-size:8rem;
  font-style:italic;
  text-align:center;
}

h2{
  font-size:4rem;
}

h3{
  font-size:2.5rem;
}

h4{
  font-size:1.5rem;
}
h4{
  font-size:1rem;
}

p{
  font-size:2rem;
  text-align:justify;
}

a{
  text-decoration: none;
}

.container {
  max-width: 170rem;
  width:90%;
  padding-top:1rem;
  margin: 0 auto;
}

.grid{
  display:grid;
  gap:2rem;
}

.grid-2-columnas{
  grid-template-columns:repeat(2, 1fr);
}

.grid-3-columnas{
  grid-template-columns:repeat(3, 1fr);
}

.centrado{
  align-items:center;
}

@media (max-width: ${({ theme }) => theme.media.movil}) {

  html {
    font-size: 45%;
  }
  .grid-2-columnas, .grid-3-columnas .columna-amplia{
    grid-template-columns:1fr;
  }
}
`
