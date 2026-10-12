import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
export const UpperNavBar = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.text};
  justify-self: end;
  position: relative;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const UpperNavBarItem = styled.div<ThemeProps>`
  padding: 0.8rem 1.4rem;
  font-size: 1.7rem;
  font-weight: 500;
  min-width: 8rem;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 0.3rem;
  text-align: center;
  white-space: nowrap;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 1.4rem;
    min-width: auto;
  }
`;
