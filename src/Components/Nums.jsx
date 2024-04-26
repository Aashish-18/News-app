import styled from "styled-components"

const Nums = ({setError,Error,selectedNum,setSelectedNum}) => {
    const arr = [1,2,3,4,5,6];
    const numshandler = (value)=>{
      setSelectedNum(value);
      setError("");
    }
    
  return (
    <Numscontainer>
    <p className="err">{Error}</p>
    <div className="flex">
    {arr.map((value,i)=>(
        <Box 
        isSelected={selectedNum === value}
        key={i} onClick={()=>numshandler(value)}>{value}</Box>
    ))}
    </div>
    <p>Select Number</p>
    </Numscontainer>
    
  );
};

export default Nums;

const Numscontainer=styled.div`
.err{color: red;}
.flex{
  display: flex;
  gap: 10px;
}
p{
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
  text-align: end;
}
`;
const Box=styled.div`
    height: 70px;
    width: 70px;
    border: 1px solid black;
    font-size: 25px;
    font-weight: 700;   
    display: grid;
    place-items: center;
    background-color: ${({isSelected})=>isSelected ? "black" : "white"};
    color: ${({isSelected})=>isSelected ? "white" : "black"};
`