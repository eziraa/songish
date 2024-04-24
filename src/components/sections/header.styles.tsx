import styled from "styled-components";
import { Theme } from "../../styles/themes";
interface ThemeProps {
  theme: Theme;
}
export const Header = styled.div<ThemeProps>`
  padding: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10rem;
  color: ${({ theme }) => theme.headerColor};
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundSecondary};
  transition: all 0.5s linear;
`;
