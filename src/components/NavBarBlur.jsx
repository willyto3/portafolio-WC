// Importacion de Navlink del React Router
import { NavLink } from 'react-router-dom'
// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Wrapper className='container'>
      <div className='nav-bar'>
        <ul className='nav-bar__list'>
          <li className='nav-bar__item'>
            <NavLink className='nav-bar__link' to='/'>
              INICIO
            </NavLink>
          </li>
          <li className='nav-bar__item'>
            <NavLink className='nav-bar__link' to='experiencia'>
              EXPERIENCIA
            </NavLink>
          </li>
          <li className='nav-bar__item'>
            <NavLink className='nav-bar__link' to='estudios'>
              ESTUDIOS
            </NavLink>
          </li>
          <li className='nav-bar__item'>
            <NavLink className='nav-bar__link' to='proyectos'>
              PROYECTOS
            </NavLink>
          </li>
          <li className='nav-bar__item'>
            <NavLink className='nav-bar__link' to='contacto'>
              CONTACTO
            </NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-bar__list {
    display: inherit;
    gap: 3rem;
    list-style: none;

    &:hover .nav-bar__link:not(:hover) {
      opacity: 0.5;
      filter:blur(0.1rem)
    }
  }

  .nav-bar__item {
    font-size: 3rem;
    font-weight: 700;
  }

  .nav-bar__link {
    text-decoration: none;
    color: black;

    &:hover {
      color: blue;
    }
  }
`

export default NavBar
