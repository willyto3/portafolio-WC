// Importamos Styled de styled-components
import styled from 'styled-components'

const Card = ({ titulo, imagen, parrafo, conocimiento }) => {
  return (
    <Caja>
      <div className='box'>
        <div className='box__circulo'></div>
        <img className='box__imagen' src={imagen} alt='Foto' />
        <div className='box__contenido'>
          <h2 className='box__titulo'>{titulo}</h2>
          <p className='box__parrafo'>
            {parrafo}
          </p>
          <h3 className='box__conocimiento'>{conocimiento}</h3>
        </div>
      </div>
    </Caja>
  )
}
export default Card

const Caja = styled.div`
  .box {
    position: relative;
    width: 20rem;
    height: 12rem;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    transition: 0.5s;

    &:hover {
      width: 40rem;
      height: 25rem;
    }
  }

  .box__circulo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      clip-path: circle(7rem at center);
      transition: 0.5s;
    }
  }

  .box:hover .box__circulo::before {
    clip-path: circle(25rem at center);
  }
  .box__imagen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 10rem;
    pointer-events: none;
    transition: 0.5s;
  }

  .box:hover .box__imagen {
    left: 75%;
    height: 13rem;
  }

  .box__contenido {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 55%;
    left: 20%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .box:hover .box__contenido {
    left: 0;
    visibility: visible;
    opacity: 1;
  }

  .box__titulo {
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 5rem;
  }

  .box__parrafo {
    font-size: 1.5rem;
  }

  .box__conocimiento {
    line-height: 4rem;
  }

  @media (max-width: 600px) {
    .box {
      width: auto;
      max-width: 45rem;
      align-items: flex-start;

      &:hover {
        height: 30rem;

        .box__imagen {
          top: 70%;
          left: 50%;
          height: 14rem;
        }
      }
    }

    .box__contenido {
      width: 100%;
      left: 0;
      padding: 0.5rem;
    }
  }
`
