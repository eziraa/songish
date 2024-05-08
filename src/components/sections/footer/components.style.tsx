import styled from "@emotion/styled";
import { ThemeProps } from "../../../styles/theme-interface";

export const FooterContainer = styled.div<ThemeProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: -9.7rem;
  margin-bottom: -2rem;
  width: 100vw;
  padding: 1rem 5rem;
  position: absolute;
  bottom: 0;
  align-items: center;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

export const FooterText = styled.p<ThemeProps>`
  margin: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.footerTextColor};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: start;
`;

export const CopyRight = styled(FooterText)`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.footerTextColor};
`;


export const FooterLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
