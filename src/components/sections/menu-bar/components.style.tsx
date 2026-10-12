import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Menu = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 24rem;
  left: 0;
  top: 11rem;
  height: calc(100% - 11rem);
  overflow-y: auto;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 1.6rem;
  position: fixed;
  z-index: 10;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: auto;
    max-height: none;
    padding: 0.4rem;
    overflow: visible;
    box-shadow: 0 -0.2rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
export const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    overflow-x: auto;
    width: 100%;
  }
`;

export const MenuBarItem = styled.div<ThemeProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.5rem;
  font-weight: 300;
  min-width: 20rem;
  border: 0.2rem solid transparent;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: "Roboto", sans-serif;
  text-align: start;
  letter-spacing: 1px;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  }

  @media (max-width: 768px) {
    flex: 1 0 auto;
    min-width: 6.4rem;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
    padding: 0.8rem 0.6rem;
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;

    svg {
      font-size: 2rem;
    }
  }
`;
