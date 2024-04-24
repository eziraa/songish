import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-inteface";

export const Header = styled.div<ThemeProps>`
  padding: 10px 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10rem;
  color: ${({ theme }) => theme.headerColor};
  position: fixed;
  width: 98vw;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundSecondary};
  transition: all 0.5s linear;
`;
