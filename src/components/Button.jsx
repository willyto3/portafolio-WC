import styled from 'styled-components'

const Button = () => {
  return (
    <Wrapper>
      <button>
        <span>Descargar CV</span>
      </button>
    </Wrapper>
  )
}
export default Button

const Wrapper = styled.div`
  button {
    background: transparent;
    position: absolute;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: black;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
  }

  button span {
    margin: 10px;
  }

  button::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  button:hover {
    color: #fff;
    border: 1px solid black;
  }

  button:hover::before {
    box-shadow: inset 0 0 0 10em black;
  }
`
