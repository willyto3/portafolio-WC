// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper className='container'>
      <div className='inicio'>
        <h2 className='inicio__intro'>Hola, Mi Nombre es</h2>
        <h1 className='inicio__nombre'>Willy Corzo</h1>
        <div className='inicio__caja'>
          <div className='inicio__titulo'>
            <div className='inicio__profesion'>
              Master en Gerencia de Proyectos
            </div>
            <div className='inicio__profesion'>Ingeniero Químico</div>
            <div className='inicio__profesion'>Web Developer</div>
            <div className='inicio__profesion'>Experto en Excel - VBA</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: beige;
  min-height: 90vh;

  .inicio__caja {
    height: 5rem;
    overflow: hidden;
  }
  .inicio__titulo {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  @keyframes move {
    33% {
      transform: translateY(-5rem);
    }
    66% {
      transform: translateY(-10rem);
    }
    100% {
      transform: translateY(-15rem);
    }
  }

  .inicio__profesion {
    display: flex;
    align-items: center;
    height: 5rem;
    font-size: 4rem;
  }
`
