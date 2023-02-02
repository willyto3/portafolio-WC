// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Herramientas from '../components/Herramientas'
import CardEstudio from '../components/CardEstudio'

const Estudios = () => {
  return (
    <Wrapper className='container'>
      <div className='grid grid-2-columnas columna-amplia'>
        <div>
          <h2>Mis Estudios</h2>
          <CardEstudio />
        </div>
        <Herramientas />
      </div>
    </Wrapper>
  )
}
export default Estudios
const Wrapper = styled.section`

.columna-amplia{
  grid-template-columns: 75% 25%;
}`
