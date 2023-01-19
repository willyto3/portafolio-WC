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

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.small}) {
    font-size: 40%;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 35%;
  }

  @media (max-width: ${({ theme }) => theme.media.smalltablet}) {
    font-size: 25%;
  }

  
}

h1{
  font-family: Merriweather, "Work Sans", sans-serif;
  font-size:9rem;
  font-style:italic;
}
h2{
  font-size:5rem;
}
h3{
  font-size:4rem;
}

p{
  font-size:3rem;
  text-align:justify;
}
.container {
  max-width: 180rem;
  padding-top:1rem;
  margin: 0 auto;
}



`
