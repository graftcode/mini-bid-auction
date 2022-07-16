import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.section`
  padding: 32px 16px;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 32px;
 
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Layout = ({ children }: any) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
