import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 5vmin;
  margin-left: auto;
  margin-right: auto;
  height: 88.5vh;

  .content {
    h1 {
      position: absolute;
      right: 10%;
      top: 25%;
      font-size: 93px;
      white-space: nowrap;
    }
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/Dices_Main.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
