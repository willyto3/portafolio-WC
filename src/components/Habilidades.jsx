import styled from 'styled-components'
import Card from './Card'

const Habilidades = () => {
  return (
    <Grilla>
      <Card titulo='Git Hub' imagen='github.png'/>
      <Card titulo='Excel' imagen='excel.png'/>
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
