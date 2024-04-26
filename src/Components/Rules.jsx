import React from 'react'
import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
    <h2>How to play this dice game</h2>
    <p>1. Select a number from 1 to 6</p>
    <p>2. Roll the dice</p>
    <p>3. If the number on the dice matches the number you selected, you that much points</p>
    <p>4. If the number on the dice does not match the number you selected, you lose 2 points</p>
    <p>5. You can reset the score at any time</p>

    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
margin: 0 auto;
background-color: white;
padding: 20px;
border-radius: 20px;
box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
margin-top: 20px;
max-height: 350px;
max-width: 700px;
h2{
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
p{
  font-size: 15px;
  font-weight: 500;
}

`;
