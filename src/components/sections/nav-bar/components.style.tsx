import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-inteface";
export const UpperNavBar = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.text};
  justify-self: end;
  position: relative;
`;

export const UpperNavBarItem = styled.div<ThemeProps>`
  padding: 8px 14px;
  font-size: 1.1rem;
  font-weight: bold;
  min-width: 7rem;
  flex: 1;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 3px;
  text-align: center;
  transition: all 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }
`;
