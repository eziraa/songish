import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Menu = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 15vw;
  left: 0;
  top: 12vh;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 1.6rem;
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
  gap: 1rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 20rem;
  border: 0.2rem solid transparent;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: monospace;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  letter-spacing: 1px;
`;
