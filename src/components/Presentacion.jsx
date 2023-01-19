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
            <div className='inicio__profesion'>Desarrollador Web</div>
            <div className='inicio__profesion'>Experto en Excel - VBA</div>
          </div>
        </div>
        <p>
          Soy una persona responsable, genero soluciones creativas a los
          problemas que se me presentan en mi entorno, con iniciativa,
          honestidad y puntualidad, asumo con agrado los retos y metas que su
          organización pudiera plantear, facilidad para trabajar en equipo, con
          buen manejo de relaciones interpersonales, autodidacta, facilidad y
          disposición para aprender y para adaptarme a los cambios.
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
  margin: 2rem;

  .inicio__caja {
    height: 8rem;
    overflow: hidden;
    margin: 2rem 0 2rem 0;
  }
  .inicio__titulo {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  @keyframes move {
    25% {
      transform: translateY(-8rem);
    }
    50% {
      transform: translateY(-16rem);
    }
    75% {
      transform: translateY(-24rem);
    }
    100% {
      transform: translateY(-32rem);
    }
  }

  .inicio__profesion {
    align-items: center;
    line-height: 8rem;
    font-size: 6rem;
  }
`
