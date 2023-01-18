// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Presentacion = () => {
  return (
    <Wrapper>
      <div className='inicio'>
        <h2 className='inicio__intro'>Hola, Mi Nombre es</h2>
        <h1 className='inicio__nombre'>Willy Corzo</h1>
        <div className='inicio__caja'>
          <div className='inicio__titulo'>
            <div className='inicio__profesion'>
              Master en Gerencia de Proyectos
            </div>
            <div className='inicio__profesion'>Ingeniero Químico</div>
            <div className='inicio__profesion'>
              Especialista NTC ISO 17025:2017
            </div>
            <div className='inicio__profesion'>Web Developer</div>
            <div className='inicio__profesion'>Experto en Excel - VBA</div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste
          facere quia nam esse necessitatibus placeat minus dignissimos
          molestiae repudiandae rem voluptatum maiores officiis modi,
          repellendus accusantium tempore corrupti dolore.
        </p>
        <button>Descargar CV</button>
      </div>
    </Wrapper>
  )
}
export default Presentacion

const Wrapper = styled.section`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 50%;

  .inicio__caja {
    height: 6rem;
    overflow: hidden;
  }
  .inicio__titulo {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  @keyframes move {
    25% {
      transform: translateY(-6rem);
    }
    50% {
      transform: translateY(-12rem);
    }
    75% {
      transform: translateY(-18rem);
    }
    100% {
      transform: translateY(-24rem);
    }
  }

  .inicio__profesion {
    align-items: center;
    line-height: 6rem;
    font-size: 4rem;
  }
`
