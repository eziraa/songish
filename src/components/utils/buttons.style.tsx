import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-inteface";

export const OutLinedButton = styled.button<ThemeProps>`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.outLinedBtnColor};
  padding: 7px 16px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  font-family: monospace;

  &:hover {
    background-color: ${({ theme }) => theme.outLinedBtnColor};
    border: 2px solid ${({ theme }) => theme.outLinedBtnColor};
    color: var(--text-color);
    cursor: pointer;
  }
`;
