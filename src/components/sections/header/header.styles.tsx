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
  top: 0;
  z-index: 1;
  background-color: ${({ theme }: ThemeProps) => theme.backgroundSecondary};
`;
