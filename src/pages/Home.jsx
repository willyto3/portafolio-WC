// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='box grid'>
        <div className='box__columna'>
          <img src='WillyNegro.png' alt='Foto Perfil' />
        </div>
        <div className='box__columna'>
          <Presentacion />
        </div>
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  img {
    width: 35rem;
  }

  .box {
    grid-template-columns: 1fr 2fr;
    align-items: center;
    justify-items: center;

    @media (max-width: ${({ theme }) => theme.media.tablet}),
      (max-width: ${({ theme }) => theme.media.movil}) {
      grid-template-columns: 1fr;
    }
  }
`
