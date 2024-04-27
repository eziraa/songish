import styled from "@emotion/styled";
import { ThemeProps } from "../../../styles/theme-interface";

export const FooterContainer = styled.div<ThemeProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  padding: 20px;
  text-align: center;
  z-index: 200;
`;

export const FooterText = styled.p<ThemeProps>`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const FooterLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
