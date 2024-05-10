import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
export const UpperNavBar = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.text};
  justify-self: end;
  position: relative;
  min-width: 30vw;
`;

export const UpperNavBarItem = styled.div<ThemeProps>`
  padding: 0.8rem 1.4rem;
  font-size: 1.7rem;
  font-weight: 500;
  min-width: 11rem;
  flex: 1;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 0.3rem;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }
`;
