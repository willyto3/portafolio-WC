// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='grid'>
      <div className='box-footer grid grid-2-columnas'>
        <div className='box-footer__footer'>
          <div className='box-footer__terms'>
            <p>
              <h2>Willy Corzo</h2>
              Ingeniero Químico con 14 años de experiencia en Transferencia en
              Custodia, Medición y Analisis de Hidrocarburos. Orientado a
              resultados y a crear soluciones automatizadas.
            </p>
          </div>
        </div>
        <div className='box-footer__footer grid'>
          <h3>Redes Sociales</h3>
          <div className='box-footer__iconos grid grid-3-columnas'>
            <a href='#' className='box-footer__icono'>
              <img src='whatsapp.png' alt='Foto' />
            </a>
            <a href='#' className='box-footer__icono'>
              <img src='github.png' alt='Foto' />
            </a>
            <a href='#' className='box-footer__icono'>
              <img src='linkedin.png' alt='Foto' />
            </a>
          </div>
        </div>
      </div>
      <div className='box-footer__copyright'>
        <hr />
        <p>Todos los derechos reservados. @ 2023</p>
        <p>
          <b>Made With 💖 by Black Dog Solutions</b>
        </p>
      </div>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='250' preserveAspectRatio='none' viewBox='0 0 1920 250'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1032%26quot%3b)' fill='none'%3e%3cpath d='M58 250L308 0L582.5 0L332.5 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M378.8 250L628.8 0L1081.8 0L831.8 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M681.6 250L931.6 0L985.6 0L735.6 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M956.4000000000001 250L1206.4 0L1297.9 0L1047.9 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M1866 250L1616 0L1515.5 0L1765.5 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1542.2 250L1292.2 0L921.7 0L1171.7 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1265.4 250L1015.4000000000001 0L718.4000000000001 0L968.4000000000001 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M910.5999999999999 250L660.5999999999999 0L293.0999999999999 0L543.0999999999999 250z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3cpath d='M1749.9186966054617 250L1920 79.91869660546172L1920 250z' fill='url(%23SvgjsLinearGradient1033)'%3e%3c/path%3e%3cpath d='M0 250L170.08130339453828 250L 0 79.91869660546172z' fill='url(%23SvgjsLinearGradient1034)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1032'%3e%3crect width='1920' height='250' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1033'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1034'%3e%3cstop stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(15%2c 70%2c 185%2c 0.2)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  align-items: start;

  .box-footer {
    max-width: 120rem;
    margin: auto;
    margin-top: 1rem;
  }

  .box-footer__footer {
    height: 100%;
    padding: 0.5rem;
    margin: auto;
    justify-items: center;
  }

  .box-footer__terms {
    max-width: 35rem;
    margin-top: 0.5rem;
  }

  .box-footer__icono {
    width: 7rem;
    font-weight: 600;
    pointer-events:auto;
  }

  .box-footer__copyright {
    max-width: 120rem;
    margin: auto;
    text-align: center;
    padding: 0 1rem;

    & p {
      margin-top: 2rem;
      text-align: center;
    }
  }

  img {
    width: 7rem;
  }

  .box-footer__iconos {
    @media (max-width: ${({ theme }) => theme.media.tablet}),
      (max-width: ${({ theme }) => theme.media.movil}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
