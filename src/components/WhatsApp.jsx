// Importamos icono de WhatsApp
import { FaWhatsappSquare } from 'react-icons/fa'
import styled from 'styled-components'

const WhatsApp = () => {
  return (
    <Icon>
      <FaWhatsappSquare />
    </Icon>
  )
}
export default WhatsApp

const Icon = styled.div`
  position:absolute;
  bottom:0;
  right:2rem;
  font-size: 8rem;
  color:#25D366;
`
