import styled from 'styled-components'
import { Button } from '../Styled/Button';

const Start = (
    {toggle}
) => {
  return (
    <Container>
    <div className='photo'>
    <img src="/dices.png" alt="Dice" />
    </div>

    <div className='content'>
    <h1>Dice Game</h1>
    <Button onClick={toggle}>Play Now</Button>
    </div>

    </Container>
  )
}

export default Start;

const Container = styled.div`
max-width: 1200px;
display: flex;  
margin: 0 auto;
align-items: center;
height: 100vh;
.content {
    h1{
        font-size: 90px;
        white-space: nowrap;
    }
}
.photo {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

}
`
