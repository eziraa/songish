import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const Header = styled.header<ThemeProps>`
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
      ${({ theme }) => theme.backgroundPrimary},
      ${({ theme }) => theme.backgroundPrimary}
    ),
    url("Addis-Front-End/src/assets/hero.jpg");
  background-size: cover;
  color: #fff;
`;

export const HeaderContainer = styled.div`
  width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const HeaderContainerInner = styled.div`
  width: 50%;
`;

export const Heading1 = styled.h1`
  font-size: 52px;
  margin-bottom: 32px;
  line-height: 1.05;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 48px;
`;

export const Button = styled.a`
  font-size: 20px;
  font-weight: 600;
  background-color: #e67e22;
  text-decoration: none;
  display: inline-block;
  padding: 16px 32px;
  border-radius: 9px;
  cursor: pointer;
`;
