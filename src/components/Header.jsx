// Importamos Styled de styled-components
import styled from 'styled-components'
// Importamos Navlink de React router
import { NavLink } from 'react-router-dom'
// Importacion de Componentes
import NavBar from './NavBar'

const Header = () => {
  return (
    <Wrapper>
      <NavLink to='/'>
        <img src='logo.png' alt='Logo' />
      </NavLink>
      <NavBar />
    </Wrapper>
  )
}
export default Header

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  margin-top: 0.2rem;

  img {
    height: 10rem;
  }

  button{
    margin-right:2rem;
  }
`
