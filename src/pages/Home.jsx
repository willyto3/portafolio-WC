// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Componentes
import Presentacion from '../components/Presentacion'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='box grid grid-2-columnas'>
        <div className='box__columna'>
          <img src='willyBlanco.jpg' alt='Foto Perfil' />
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
  img{
    width:40rem;
  }

  .box{
    grid-template-columns:1fr 2fr;
    align-items:center;
    justify-items:center;
    
  }
`
