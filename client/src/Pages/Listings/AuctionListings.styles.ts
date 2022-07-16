import styled from "styled-components";

export const Container = styled.section``;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 16px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 32px 16px;
  }
`;
