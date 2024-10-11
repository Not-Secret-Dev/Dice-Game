import React from "react";
import styled from "styled-components";

const RulesContainer = styled.div`
  position: absolute;
  top: 30vh;
  left: 22.8vw;
  padding: 24px;
  border-radius: 10px;
  width: 50vw;
  height: fit-content;
  line-height: 24px;
  background-color: #fff6f4;
  border: 2px solid #eed6d0;
  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  .text {
    margin-top: 24px;
  }
`;

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>
          {" "}
          <b>1. </b> Select any number.
        </p>
        <p>
          {" "}
          <b>2. </b> Click on the dice image.
        </p>
        <p>
          {" "}
          <b>3. </b>
          After clicking the dice. if the selected number is equal to the number
          which comes on the dice, then you will get the same amount of points
          as the dice.
        </p>
        <p>
          <b>4. </b>
          If you get the wrong number, then two points will be deducted from you
          total points.
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
