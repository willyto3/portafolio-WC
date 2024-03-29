// Importacion de Styled del Styled-Components
import styled from 'styled-components'
import Button from './Button'

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
        <div>
          <p>
            Soy un Ingeniero Químico con una maestría en Gerencia de proyectos
            con amplia experiencia en el sector de Hidrocarburos. Genero
            soluciones creativas a los problemas; con iniciativa, honestidad y
            puntualidad. Asumiendo con agrado los retos y metas que su
            organización pudiera plantear. Facilidad para trabajar en equipo,
            con buen manejo de relaciones interpersonales, autodidacta,
            facilidad y disposición para aprender y para adaptarme a los
            cambios.
          </p>
        </div>
        <div className='boton'>
          <a
            href='CV Ing Willy Corzo.pdf'
            download='CV Ing Willy Corzo.pdf'
          >
            <Button />
          </a>
        </div>
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
  margin: 1rem;

  inicio {
    margin-bottom: 2rem;
  }

  .inicio__caja {
    height: 5rem;
    overflow: hidden;
    margin: 1rem 0 2rem 0;
  }
  .inicio__titulo {
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }

  @keyframes move {
    25% {
      transform: translateY(-5rem);
    }
    50% {
      transform: translateY(-10rem);
    }
    75% {
      transform: translateY(-15rem);
    }
    100% {
      transform: translateY(-20rem);
    }
  }

  .inicio__nombre{
    text-align:left;
  }

  .inicio__profesion {
    align-items: center;
    line-height: 5rem;
    font-size: 4rem;
  }

  .boton {
    margin-top: 2rem;
    height: 10rem;
  }
`
