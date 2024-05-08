import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Home = styled.div<ThemeProps>`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  min-height: 100vh;
  border: 2px solid transparent;
`;
export const Main = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 0 1rem;
  left: 15vw;
  top: 12vh;
  width: 80%;
  gap: 2rem;
  height: auto;
`;
