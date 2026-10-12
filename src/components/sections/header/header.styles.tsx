import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const HeaderComponent = styled.div<ThemeProps>`
  padding: 1.5rem 3.2rem 1.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  color: ${({ theme }) => theme.headerColor};
  position: fixed;
  width: 100%;
  min-height: 10rem;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundSecondary};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.2rem 1.6rem;
    row-gap: 0.8rem;
  }
`;

export const Logo = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  @media (max-width: 1024px) {
    width: 5rem;
    height: 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  font-family: "Roboto", sans-serif;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #07b8a0;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;