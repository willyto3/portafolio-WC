// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Proyectos = () => {
  return (
    <Wrapper className='container'>
      <h1>En Construccion</h1>
      <h2>Estoy trabajando fuertemente para completar mi portafolio.</h2>
      <img src='construccion.jpg' alt='Construyendo mi Portafolio' />
    </Wrapper>
  )
}
export default Proyectos

const Wrapper = styled.section`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
