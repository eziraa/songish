import styled from "@emotion/styled";
import { ThemeProps } from "../../../styles/theme-interface";

export const FooterContainer = styled.div<ThemeProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-left: -15.5rem;
  margin-bottom: -5.2rem;
  width: 100.1vw;
  padding: 2.16rem 8rem;
  padding-top: 5rem;
  position: absolute;
  height: 25vh;
  bottom: 0;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

export const FooterText = styled.p<ThemeProps>`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.footerTextColor};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: start;
  width: 60%;
`;

export const CopyRight = styled(FooterText)`
  font-size: 1.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.footerTextColor};
`;


export const FooterLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
