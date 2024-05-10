import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const HeaderComponent = styled.div<ThemeProps>`
  padding: 15px 10px;
  padding-right: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${({ theme }) => theme.headerColor};
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundSecondary};
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  font-family: "Robotto", sans-serif;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0.5rem;
  left: 5rem;
  gap: 0.5rem;
  color: #07b8a0;
`;