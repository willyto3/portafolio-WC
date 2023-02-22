import styled from 'styled-components'

const CardEstudio = () => {
  return (
    <Wrapper>
      <div className='card'>
        <div className='card-text'>
          <div className='portada'>
          </div>
          <div className='title-total'>
            <div className='title'>Universidad del Atlantico</div>
            <h2>Ingenieria Química</h2>

            <div className='desc'>
              Barranquilla - 2007
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default CardEstudio

const Wrapper = styled.div`
  border: 1rem solid blue;
  height: 80dvh;

  .card {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    max-width: 400px;
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    position: relative;
  }
  .card h2 {
    margin: 0;
    padding: 0 1rem;
  }
  .card .title {
    padding: 1rem;
    text-align: right;
    color: green;
    font-weight: bold;
    font-size: 12px;
  }
  .card .desc {
    padding: 0.5rem 1rem;
    font-size: 12px;
  }

  .card-text {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .title-total {
    padding: 2.5em 1.5em 1.5em 1.5em;
  }

  .img-portada {
    width: 100%;
  }

  .portada {
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: url('ua.png');
    background-repeat:no-repeat;
    background-position: center center;
    background-size: contain;
  }
`
