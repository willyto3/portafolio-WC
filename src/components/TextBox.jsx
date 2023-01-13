import styled from 'styled-components'

const TextBox = () => {
  return (
    <Box className='textbox'>
      <input
        className='textbox__input'
        type='text'
        placeholder='Introduce el dato'
      />
      <label className='textbox__label' htmlFor=''>
        Introduce el dato
      </label>
    </Box>
  )
}
export default TextBox

const Box = styled.div`
  position: relative;

  .textbox__input {
    width: 30rem;
    height: 6rem;
    border-radius: 3rem;
    border: 0;
    padding-left: 12.6rem;
    font-size: 1.6rem;
    transition: 0.3s;
    background: #313136;

    &::placeholder {
      color: rgb(255 255 255 / 50%);
    }
  }

  .textbox__label {
    position: absolute;
    display: grid;
    place-items: center;
    transform-origin: 0% 0%;
    pointer-events: none;
    top: 0.4rem;
    left: 0.4rem;
    height: 5.2rem;
    width: 11rem;
    border-radius: 2.7rem;
    background-color: #5071fa;
  }

  &:is(.textbox__input:focus, .textbox__input:valid) {
    padding-left: 2rem;
  }
  &:is(.textbox__input:focus, .textbox__input:valid) ~ .textbox__label {
    translate: 0 -5.4rem;
    scale: 0.825;
  }
`
