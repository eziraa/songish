import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Home = styled.div<ThemeProps>`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;
export const Main = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: 24rem;
  top: 11rem;
  right: 0;
  width: calc(100% - 24rem);
  max-width: 100%;
  gap: 3rem;
  padding: 5vh 1.6rem 4rem;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    padding: 2.4rem 1.2rem 11rem;
  }
`;
