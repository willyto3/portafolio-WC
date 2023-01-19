// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='box'>
        <div className='box__columna'>
          <img src='willyBlanco.jpg' alt='' />
        </div>
        <div className='box__columna box__columna--amplio'>
          <Presentacion />
        </div>
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

  .box__columna {
    width: 30%;
  }
  .box__columna--amplio {
    width: 70%;
  }
  img {
    height: 70rem;
  }

  @media (max-width: ${({ theme }) => theme.media.movil}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box__columna {
      width: 90%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    img {
      display: flex;
    }
  }
`
