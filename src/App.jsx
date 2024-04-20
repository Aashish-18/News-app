import Nav from './Components/Nav.jsx'
import NewsBoard from './Components/NewsBoard.jsx'
import {useState } from "react";
const App = () => {
  const[category,setCategory]=useState("general");
  return (
    <div>
    <Nav setCategory={setCategory}/>
    <NewsBoard category={category}/>
    </div>
    
  )
}

export default App