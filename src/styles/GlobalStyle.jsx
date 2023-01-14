// importamos la funcion createGlobalStyle
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* eliminamos los margenes y el padding, implementamos el border box y usamos fuentes globales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

/* implementamos que 1rem sea igual a 10px y ocultamos la barra de navegacion en el eje x */
html {
  font-size: 62.5%;
  overflow-x: hidden;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

`
