// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='box-footer'>
        <div className='box-footer__footer'>
          <div className='box-footer__logo'>
            <img src='logo.png' alt='Logo' />
          </div>
          <div className='box-footer__terms'>
            <p>
              Soy una persona responsable, genero soluciones creativas a los
              problemas, con iniciativa, honestidad y puntualidad, asumo con
              agrado los retos y metas que su organización pudiera plantear,
              facilidad para trabajar en equipo, autodidacta, disposición para
              aprender y me adapto rapidamente a los cambios.
            </p>
          </div>
        </div>
        <div className='box-footer__footer'>
          <h2>Soluciones</h2>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
        </div>
        <div className='box-footer__footer'>
          <h2>Redes Sociales</h2>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
          <a href='#'>Prueba</a>
        </div>
      </div>
      <div className='box-footer__copyright'>
        <hr />
        <p>
          Todos los derechos reservados. @2023
          <b>Black Dog Solutions</b>
        </p>
      </div>
      {/* <div className='grid grid-3-columnas box'>
        <div>de</div>
        <div>dd</div>
        <div className='box__redes'>
          <h3>Mis Redes</h3>
          <div className='box__iconos'>
            <img src='linkedin.png' alt='Logo LinkedIn' />
          </div>
          <div className='box__iconos'>
            <img src='whatsapp.png' alt='Logo WhatsApp' />
          </div>
          <div className='box__iconos'>
            <img src='github.png' alt='Logo GitHub' />
          </div>
          <div className='box__iconos'>
            <img src='linkedin.png' alt='Logo LinkedIn' />
          </div>
        </div>
      </div> */}
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.footer`
  width: 100%;
  padding: 2rem 0;
  // Pendiente la imagen de fondo background-image
  // pendiente el tamaño del fondo

  .box-footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 120rem;
    margin: auto;
    margin-top: 2rem;
  }

  .box-footer__footer {
    display: flex;
    flex-direction: column;
    padding: 4rem;
  }

  .box-footer__terms {
    max-width: 35rem;
    margin-top: 2rem;
  }

  .box-footer a {
    font-weight: 700;
  }

  .box-footer__copyright {
    max-width: 120rem;
    margin: auto;
    text-align: center;
    padding: 0 4rem;

    & p {
      margin-top: 2rem;
      text-align: center;
    }
  }

  img {
    width: 10rem;
  }
`
