import styled from 'styled-components'
import Card from './Card'

const Habilidades = () => {
  return (
    <Grilla>
      <h2>Herramientas</h2>
      <div className='grilla'>
        <Card titulo='Git Hub' imagen='github.png' />
        <Card titulo='Excel' imagen='excel.png' />
        <Card titulo='HTML' imagen='html-5.png' />
        <Card titulo='CSS' imagen='css-3.png' />
        <Card titulo='JavaScript' imagen='js.png' />
        <Card titulo='React' imagen='atom.png' />
        <Card titulo='HTML' imagen='html-5.png' />
        <Card titulo='CSS' imagen='css-3.png' />
        <Card titulo='JavaScript' imagen='js.png' />
        <Card titulo='React' imagen='atom.png' />
      </div>
    </Grilla>
  )
}
export default Habilidades

const Grilla = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  transition: 0.5s;

  .grilla {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    transition: 0.5s;
  }
`
