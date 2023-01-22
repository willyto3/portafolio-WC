// Importacion de Styled del Styled-Components
import styled from 'styled-components'
import Button from '../components/Button'

const Error404 = () => {
  return (
    <Wrapper className='container'>
      <Button />
    </Wrapper>
  )
}
export default Error404

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
