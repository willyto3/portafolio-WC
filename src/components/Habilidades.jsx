import styled from 'styled-components'
import Card from './card'

const Habilidades = () => {
  return (
    <Grilla>
      <Card />
      <Card />
    </Grilla>
  )
}
export default Habilidades

const Grilla = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  gap: 1rem;
  transition:0.5s;
`
