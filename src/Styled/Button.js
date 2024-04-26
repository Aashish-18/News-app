import styled from 'styled-components';

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
height: 50px;
margin-top: 20px;
background-color: black;
color: white;
min-width: 200px;
border: none;
border-radius: 5px;
transition: all 0.3s ease-in-out;
cursor: pointer;
&:hover {
  background-color: white;
    color: black;
    border: 1px solid black;
}

`;
export const OutlineButton = styled(Button)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
height: 50px;
background-color: white;
color: black;
min-width: 200px;
border: 1px solid black;
border-radius: 5px;
transition: all 0.3s ease-in-out;
&:hover {
  background-color: black;
    color: white;
    border: 1px solid black;
}

`;