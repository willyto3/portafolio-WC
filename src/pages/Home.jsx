// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'
import Habilidades from '../components/Habilidades'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='container__columna1'>
        <Presentacion />
      </div>

      <div className='container__columna'>
        <Habilidades />
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  display: flex;
  justify-content:space-between;
  margin-top: 2rem;

  .container__columna1 {
    width: 80%;
  }
  .container__columna {
    width: 20%;
  }
`
