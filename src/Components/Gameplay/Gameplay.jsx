import React from "react";
import TotalScore from "../Score/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import styled from "styled-components";
import RollDice from "../RollDice/RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "../Rules/Rules";

const MainContainer = styled.main`
  padding-top: 10px;
  max-width: 1280px;
  margin: 0 auto;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
`;

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (selectedNumber !== undefined) {
      const randomNumber = generateRandomNumber(1, 6); // 1-6 for a standard die
      setCurrentDice(randomNumber);

      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => (prev > 0 ? prev - 2 : 0)); // Ensure score doesn't go negative
      }
      setSelectedNumber(undefined); // Clear selected number after rolling
      setError("");
    } else {
      setError("You have not selected any number!");
      return;
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <MainContainer>
        <div className="top-section">
          <TotalScore score={score} />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
          />
        </div>
        <RollDice rollDice={rollDice} currentDice={currentDice} />
        <div className="buttons">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules(!showRules)}>
            {showRules ? "Hide Rules" : "Show Rules"}
          </Button>
        </div>
      </MainContainer>
      {showRules && <Rules />}
    </>
  );
};

export default Gameplay;
