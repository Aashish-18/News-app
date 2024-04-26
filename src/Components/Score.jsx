import styled from "styled-components"

const Score = ({score}) => {
  return (
    <ScoreContainer>

    <h1>{score}</h1>
    <p>Score</p>
    </ScoreContainer>
  );
};

export default Score
const ScoreContainer = styled.div`
max-width:150px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 100px;
    margin: 0;
}
p{
    font-size: 30px;
    font-weight: 500px;
    margin: 0;
}
`