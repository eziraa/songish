import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-interface";

export const OutLinedButton = styled.button<ThemeProps>`
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.outLinedBtnColor};
  padding: 0.7rem 1.6rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: monospace;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.outLinedBtnColor};
    border: 0.2rem solid ${({ theme }) => theme.outLinedBtnColor};
    color: var(--text-color);
    cursor: pointer;
  }
`;
