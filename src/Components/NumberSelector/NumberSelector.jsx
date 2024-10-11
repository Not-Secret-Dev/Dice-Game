import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 50px;
  height: 50px;
  margin: 12px;
  border: 1px solid;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-size: larger;
  font-weight: bold;
  transition: 0.4s all;
  background-color: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const BoxContainer = styled.div`
  display: flex;
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;

  .error {
    color: red;
  }
`;

const NumberSelector = ({ selectedNumber, setSelectedNumber, error }) => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <BoxContainer>
        {array.map((value, index) => (
          <Box
            key={index}
            selected={selectedNumber === value} // Check if the number is selected
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </BoxContainer>
      <p>Please Select a Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
