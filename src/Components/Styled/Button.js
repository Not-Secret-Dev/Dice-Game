import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  color: white;
  font-size: 16px;
  transition: 0.3s all;
  outline: none;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
    cursor: pointer;
  }
`;
