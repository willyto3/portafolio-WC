// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'
import Habilidades from '../components/Habilidades'
import Herramientas from '../components/Herramientas'

const Home = () => {
  return (
    <Wrapper className='container'>
      <Presentacion />
      <div className='presentacion'>
        <Habilidades />
        <Herramientas />
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  min-height: 70vh;

  .presentacion {
    border: 0.5rem dotted blue;
  }
`
