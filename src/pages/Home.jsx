// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='container__columna container__columna--amplio'>
        <Presentacion />
      </div>

      <div className='container__columna'>
        <img src="willyBlanco.jpg" alt="" />
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin-top: 2rem;

  .container__columna {
    width: 40%;
  }
  .container__columna--amplio {
    width: 60%;
  }
  img{
    height:70rem;
  }
`
