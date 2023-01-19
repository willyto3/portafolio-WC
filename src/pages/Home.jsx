// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='container__columna'>
        <img src='willyBlanco.jpg' alt='' />
      </div>
      <div className='container__columna container__columna--amplio'>
        <Presentacion />
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  .container__columna {
    width: 30%;
  }
  .container__columna--amplio {
    width: 70%;
  }
  img {
    height: 70rem;
  }
`
