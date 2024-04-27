import styled, { keyframes } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
import { darkTheme, lightTheme } from "../../../styles/themes";

export const LazyChange = keyframes<ThemeProps>`
    0% {
        background-color: ${({ theme }) =>
          theme === lightTheme ? darkTheme.text : lightTheme.text};
    }
    100% {
        background-color: ${({ theme }) =>
          theme === lightTheme ? lightTheme.text : darkTheme.text};
    }
`;

export const ToggleButton = styled.div<ThemeProps>`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  transition: all 1.4s linear;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
