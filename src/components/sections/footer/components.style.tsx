import styled from "@emotion/styled";
import { ThemeProps } from "../../../styles/theme-interface";

export const FooterContainer = styled.div<ThemeProps>`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-top: 4rem;
  padding: 2.16rem 4rem 2.4rem;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};

  @media (max-width: 768px) {
    padding: 1.6rem;
  }
`;

export const FooterText = styled.p<ThemeProps>`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.footerTextColor};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  width: 100%;
  max-width: 60rem;
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
