import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-interface";

export const UnderlinedTitle = styled.h2<ThemeProps>`
  font-size: 2rem;
  color: ${({ theme }) => theme.titleColorPrimary};
  font-weight: 700;
  width: fit-content;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: -10%;
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.formButtonColor},
      ${({ theme }) => theme.backgroundPrimary}
    );
  }
`;
