import styled from 'styled-components'

const CardEstudio = ({ institucion, estudio, fecha, fondo, grado }) => {
  return (
    <Wrapper>
      <div className='card'>
        <div className='card__text'>
          <div
            className='card__portada'
            style={{ backgroundImage: `url(${fondo})` }}
          ></div>
          <div className='card__title-total'>
            <div className='card__institucion'>{institucion}</div>
            <h2 className='card__estudio'>{estudio}</h2>
            <h4 className='card__grado'>{grado}</h4>
            <div className='card__fecha'>{fecha}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default CardEstudio

const Wrapper = styled.div`
  .card {
    background: #fff;
    max-width: 50rem;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .card__estudio {
    margin: 0;
    padding: 0 1rem;
    font-size: 2.5rem;
  }

  .card__institucion {
    padding: 1rem;
    text-align: right;
    color: green;
    font-weight: bold;
    font-size: 2rem;
  }
  .card__fecha {
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }

  .card__text {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .card__title-total {
    padding: 2.5em 1.5em 1.5em 1.5em;
  }

  .card__grado {
    margin: 0;
    padding: 0 1rem;
    font-size: 2rem;
  }

  .card__portada {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
`
