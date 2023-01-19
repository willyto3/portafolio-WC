// Importacion de Styled del Styled-Components
import styled from 'styled-components'

const Error404 = () => {
  return (
    <Wrapper className='container'>
      <h1>En Construccion</h1>
      <h2>Estoy trabajando fuertemente para completar mi portafolio. X2</h2>
      <img src='construccion.jpg' alt='Construyendo mi Portafolio' />
    </Wrapper>
  )
}
export default Error404

const Wrapper = styled.section`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`