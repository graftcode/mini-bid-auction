import styled from "styled-components";
import { rem } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: ${rem(450)};
  margin: auto;
  padding: ${rem(16)};
`;
