import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type InputProps = {
  type: string;
  label: string;
  onChange: (e: any) => void;
  value: string;
};

const Input: React.FC<InputProps> = ({ type, label, onChange, value }) => {
  return (
    <InputWrapper>
      <StyledInput
        data-testid="input"
        type={type}
        id={label}
        autoComplete="off"
        placeholder=" "
        onChange={onChange}
        value={value}
      />
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </InputWrapper>
  );
};

export default Input;

const StyledInput = styled.input`
  border: 2px solid grey;
  border-radius: 5px;
  font-family: inherit;
  font-size: inherit;
  color: white;
  outline: none;
  padding: ${rem(20)};
  background: none;
  width: 100%;

  &:hover {
    border-color: grey;
  }

  &:focus {
    border-color: #18ffff;
  }

  &:focus ~ label,
  &:not(:placeholder-shown)&:not(:focus) ~ label {
    top: -${rem(16)};
    font-size: ${rem(14)};
    left: ${rem(14)};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: ${rem(14)};
  padding: ${rem(8)};
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background: #060b23;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;

  width: 100%;
  margin-bottom: ${rem(30)};
`;
