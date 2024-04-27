import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Menu = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 15vw;
  left: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  position: fixed;
  z-index: 10;
`;
export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const MenuBarItem = styled.div<ThemeProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  font-size: 0.9rem;
  font-weight: bold;
  max-width: 10rem;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 3px;
  font-family: monospace;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }
`;
