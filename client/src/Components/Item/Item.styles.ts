import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(16)};
  border: solid 1px white;
  max-width: 450px;
  margin-bottom: ${rem(16)};
`;

export const Img = styled.img`
  max-width: ${rem(200)};

  height: ${rem(150)};
  border: solid 1px white;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  text-align: left;
  font-size: ${rem(12)};
  padding-left: ${rem(10)};

`;

export const List = styled.li`
  margin-bottom: ${rem(8)};
`;
