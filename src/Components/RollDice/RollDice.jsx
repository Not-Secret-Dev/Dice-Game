import React from "react";
import styled from "styled-components";

const DiceContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 18px;
  }

  .dice {
    cursor: pointer;
  }
`;

const RollDice = ({ rollDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        {console.log(currentDice)}
        <img
          width="150px"
          src={`/images/Dice Frames/${currentDice}.png`}
          alt="dice 1"
        />
      </div>
      <p>Click On The Dice To Roll</p>
    </DiceContainer>
  );
};

export default RollDice;
