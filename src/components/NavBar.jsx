// Importacion del useState
import { useState } from 'react'
// Importacion de Navlink del React Router
import { NavLink } from 'react-router-dom'
// Importacion de Styled del Styled-Components
import styled from 'styled-components'
// Importacion de Iconos
import { CgMenu, CgClose } from 'react-icons/cg'

const NavBar = () => {
  // Estado para manejar los iconos
  const [menuIcono, setMenuIcono] = useState(false)

  return (
    <Wrapper>
      <div className={!menuIcono ? 'nav-bar' : 'nav-bar active'}>
        <NavLink className='nav-bar__link' to='/'>
          INICIO
        </NavLink>

        <NavLink className='nav-bar__link' to='experiencia'>
          EXPERIENCIA
        </NavLink>

        <NavLink className='nav-bar__link' to='estudios'>
          ESTUDIOS
        </NavLink>

        <NavLink className='nav-bar__link' to='proyectos'>
          PROYECTOS
        </NavLink>

        <NavLink className='nav-bar__link' to='contacto'>
          CONTACTO
        </NavLink>
        <div className='animation start-home'></div>
      </div>

      {/* Botones de apertura y cierre para moviles */}
      <div className='movil-nav-bar'>
        {!menuIcono ? (
          <CgMenu
            className='movil-nav-bar__icon'
            onClick={() => setMenuIcono(true)}
          />
        ) : (
          <CgClose
            className='movil-nav-bar__icon'
            onClick={() => setMenuIcono(false)}
          />
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  height: 100%;

  .nav-bar {
    position: relative;
    width: 80rem;
    height: 8rem;
    background: transparent;
    border-radius: 8px;
  }

  .nav-bar__link {
    text-decoration: none;
    font-size: 2rem;
    text-transform: uppercase;
    color: black;
    line-height: 8rem;
    position: relative;
    display: inline-block;
    text-align: center;
    z-index: 1;
    width: 16rem;
  }

  .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: #8490ff;
    border-radius: 0.8rem;
    transition: all 0.5s ease 0s;
  }

  .start-home,
  nav-bar__link:nth-child(1):hover ~ .animation {
    width: 16rem;
    left: 0;
  }

  .nav-bar__link:nth-child(2):hover ~ .animation {
    left: 16rem;
  }

  .nav-bar__link:nth-child(3):hover ~ .animation {
    left: 32rem;
  }

  .nav-bar__link:nth-child(4):hover ~ .animation {
    left: 48rem;
  }
  .nav-bar__link:nth-child(5):hover ~ .animation {
    left: 64rem;
  }

  .movil-nav-bar {
    display: none;
  }
  .movil-nav-bar__icon {
    font-size: 7rem;
  }

  /* TABLETS */
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .nav-bar {
      width: 50rem;
      height: 6rem;
    }

    .nav-bar__link {
      font-size: 1.5rem;
      line-height: 6rem;
      width: 10rem;
    }

    .start-home,
    nav-bar__link:nth-child(1):hover ~ .animation {
      width: 10rem;
    }

    .nav-bar__link:nth-child(2):hover ~ .animation {
      left: 10rem;
    }

    .nav-bar__link:nth-child(3):hover ~ .animation {
      left: 20rem;
    }

    .nav-bar__link:nth-child(4):hover ~ .animation {
      left: 30rem;
    }
    .nav-bar__link:nth-child(5):hover ~ .animation {
      left: 40rem;
    }
  }

  /* MOVILES */
  @media (max-width: ${({ theme }) => theme.media.movil}) {
    .nav-bar {
      width: 55vw;
      transform: translateX(200%);
      transition: all 1s linear;
      top: 10rem;
      width: 16rem;
      height: 40rem;
      text-align:center;

      &.active {
        transform: translateX(-10%);
        z-index: 999;
        transform-origin: right;
        transition: all 1s linear;
      }
    }

    .nav-bar__link {
      line-height: 8rem;
    }

    .movil-nav-bar {
      display: flex;
      align-items: center;
    }

    .animation {
      height: 8rem;
    }

    .start-home,
    nav-bar__link:nth-child(1):hover ~ .animation {
      width: 16rem;
      top: 0rem;
      left:0;
    }

    .nav-bar__link:nth-child(2):hover ~ .animation {
      top: 8rem;
      left:0;
    }

    .nav-bar__link:nth-child(3):hover ~ .animation {
      top: 16rem;
      left:0;
    }

    .nav-bar__link:nth-child(4):hover ~ .animation {
      top: 24rem;
      left:0;
    }
    .nav-bar__link:nth-child(5):hover ~ .animation {
      top: 32rem;
      left:0;
    }
  }
`

export default NavBar
