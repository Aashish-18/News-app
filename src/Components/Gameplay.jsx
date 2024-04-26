import React from "react";
import Score from "./Score"; 
import Nums from "./Nums";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [Error, setError] = useState();
  const [showRules,setShowRules] = useState(false);
  const generateRandom =  (min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = (
  ) => {
    if(!selectedNum) {
      setError("Please select a number");
      return;
    };
    setError("");
    const randomnum = generateRandom(1, 7);
    setCurrentDice((prev)=>randomnum);


    if(randomnum === selectedNum){
      setScore((prev)=>prev + randomnum);
    }else{
      setScore((prev)=>prev - 2);
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <Maincontainer>
  <div className="top">
  <Score score={score}/>
  <Nums
  Error={Error}
  setError={setError}
  selectedNum={selectedNum}
  setSelectedNum={setSelectedNum}
  />
  </div>
  <RollDice
  CurrentDice={CurrentDice}
  rollDice={rollDice}
  />
  <div className="btns">
  <Button
  onClick={resetScore}
  >Reset</Button>
  <OutlineButton
  onClick={()=>setShowRules((prev)=>!prev)}
  >{showRules ? "Hide" : "show"}</OutlineButton>
  </div>
  {showRules && <Rules />}

  </Maincontainer>
  );
};

export default Gameplay

const Maincontainer=styled.main`
.top{
  display: flex;
  justify-content: space-around;
  align-items: end;

}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
}
`;