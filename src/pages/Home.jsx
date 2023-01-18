// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'
import Habilidades from '../components/Habilidades'

const Home = () => {
  return (
    <Wrapper className='container'>
      <Presentacion />
      <div className='presentacion'>
        <Habilidades />
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

  .presentacion {
    border: 0.5rem dotted blue;
  }
`
