import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type ButtonProps = {
  buttonText: string;
  onClick?: () => {};
};
const Button: React.FC<ButtonProps> = ({ buttonText, onClick }) => {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  display: block;
  padding: ${rem(20)};
  max-width: ${rem(300)};
  width: 100%;
  font-size: ${rem(20)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #18ffff;
  background: linear-gradient(to left, #18ffff 50%, #435656 50%) right;
  background-size: 200%;
  transition: 0.3s ease-out;

  &:hover {
    background-position: left;
    color: white;
    border: 2px solid #18ffff;
  }
`;
