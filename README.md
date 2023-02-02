# PORTAFOLIO WILLY CORZO PRUEBA

Proyecto Pagina Profesional para Willy Corzo
www.ing-willy-corzo.com
BLACK DOG SOLUTION
FRONTEND REACT

SECTION VARIABLES
React
Idioma Español
Estilo de Escritura camelCase
CSS
Metodologia BEM

SECTION COMENTARIOS
Idioma Español

SECTION PROCEDIMIENTO

- Se crea la carpeta para guardar el frontend
- se inicia el proyecto utilizando el comando npm init vite@latest
- se selecciona React
- se instalan los paquetes necesarios con npm i
- se prueba la pagina utilizando el siguiente codigo npm run dev
- se elimina el codigo que trae la pagina estandar
- se realizan las instalaciones de las dependencias de desarrollo
- se realizan las instalaciones de las dependencias del proyecto
- se crea la carpeta pages en la carpeta src, donde vamos a guardar todas las paginas del proyecto
  - Home
  - Experiencia
  - Estudios
  - Proyectos
  - Contacto
- se crea la carpeta components en la carpeta src, donde vamos a guardar todos los componentes del proyecto
- se crea la carpeta styles en la carpeta src, donde vamos a guardar todos los estilos visuales del proyecto
  - Themes.jsx
  - GlobalStyle.jsx

- SECTION DEPENDENCIAS

Dependencias de Desarrollo

- ESlint
  npm install eslint -D
  funciones
  Es una herramienta que reporta errores en los patrones de codigo, ayuda a que tu codigo se mantenga ordenado y cumpliendo las normas.
  configuración:
  en la terminal se ejecuta este codigo $npx eslint --init
  en el archivo de configuracion creado modificamos la linea de extends
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
  adicional se debe incluir esta configuracion, para que detecte la version de React
  settings:{
  react:{
  version:'detect'
  }
  },

- npm install prettier -D
  funciones
  Es una herramienta que formatea el codigo, ayuda a que tu codigo se mantenga ordenado y cumpliendo las normas.
  configuración:
  se crea el archivo .prettierrc en la carpeta principal del proyecto
  en el archivo de creado incluimos esta configuracion
  {
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "avoid"
  }

- ESlint-config-prettier
  npm install eslint-config-prettier -D
  funciones
  Es una herramienta que iguala las normas de ESlint y Prettier en el codigo.
  configuración:
  en el archivo de configuracion de eslint modificamos la linea de extends
  extends: [
  'plugin:react/recommended',
  'standard',
  'plugin:react/jsx-runtime',
  'eslint-config-prettier',
  ],

- Iconify for React
  npm install --save-dev @iconify/react
  funciones
  Es una herramiento que cuenta con una cantidad enorme de iconos que puedes usar en tu aplicacion.

Dependencias del proyecto

- Styled Components
  npm i styled-components
  funciones
  Styled Components, es un framework para crear los estilos CSS en tu aplicacion.

- React Router
  npm i react-router-dom
  funciones
  React Router, es un framework para routear tu aplicacion.

- React Icons
  npm i react-icons
  funciones
  React Icons, es una libreria para incluir iconos en tu aplicacion.
