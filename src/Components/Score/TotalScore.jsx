import styled from "styled-components";
import React from "react";

const TotalScore = ({ score }) => {
  const ScoreContainer = styled.div`
    text-align: center;
    max-width: 105px;
    h1 {
      font-size: 60px;
      line-height: 60px;
    }

    p {
      font-size: 18px;
    }
  `;

  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
