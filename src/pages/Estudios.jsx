// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Herramientas from '../components/Herramientas'

const Estudios = () => {
  return (
    <Wrapper className='container'>
      <h1>Estudios</h1>
      <div className='grid grid-2-columnas'>
      <div className="estudio"></div>
      <Herramientas />
      </div>
      
    </Wrapper>
  )
}
export default Estudios
const Wrapper = styled.section``
