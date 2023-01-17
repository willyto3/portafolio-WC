// Importamos Styled de styled-components
import styled from 'styled-components'

const Card = () => {
  return (
    <Tarjeta>
      <div className='tarjeta'>
        <div className='tarjeta__circulo'></div>
        <img className='tarjeta__imagen' src='git.png' alt='' />
        <div className='tarjeta__contenido'>
          <h2>Git Hub</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            consectetur explicabo, nostrum tempora vero blanditiis odio dolores
            quisquam ipsam, officiis temporibus nulla distinctio veritatis eaque
            qui inventore, facere atque animi!
          </p>
        </div>
      </div>
    </Tarjeta>
  )
}
export default Card

const Tarjeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  .tarjeta {
    position: relative;
    display: flex;
    align-items: center;
    width: 60rem;
    height: 35rem;
    border-radius: 2rem;
    transition: 0.5s;

    
  }

  .tarjeta__circulo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #3a80c2;
      clip-path: circle(12rem at center);
      transition: 0.5s;
    }

    &:hover:before {
      clip-path: circle(40rem at center);
      background: white;
      border-radius: 2rem;
    }

    &:hover ~ .tarjeta__imagen {
      left: 72%;
      height: 50rem;
    }
    &:hover ~ .tarjeta__contenido {
      left: 0;
      opacity: 1;
      visibility: visible;
    }
  }
  .tarjeta__imagen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30rem;
    pointer-events: none;
    transition: 0.5s;
  }

  .tarjeta__contenido {
    position: relative;
    width: 50%;
    left: 20%;
    padding: 2rem 2rem 2rem 4rem;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }
`
