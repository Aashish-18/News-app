import styled from "styled-components";
const RollDice = ({
            rollDice,
    CurrentDice
}) => {

  return (
    <Dicecontainer><div className="dice" onClick={rollDice}>
    <img src={`/face/dice_${CurrentDice}.png`} alt="dice" />
    </div>
    <p>Click to Roll dice</p>
    </Dicecontainer>
  )
}

export default RollDice;

const Dicecontainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
img{
    width: 200px;
    height: 200px;
    margin-top: 50px;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}
.dice{
    cursor: pointer;
}
p{
    font-size: 30px;
    font-weight: bold;
}
`;