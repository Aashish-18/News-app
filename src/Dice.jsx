import { useState } from "react";
import Start from "./Components/Start";
import GamePlay from "./Components/Gameplay";
function App() {
  const [isGameStarted, setIsGameStarted] =useState(false);
  const toggleGamePlay =() => {
    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
    {isGameStarted ? <GamePlay /> : <Start 
    toggle={toggleGamePlay}/>}
    </>
  );
}

export default App
