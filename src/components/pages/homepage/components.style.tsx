import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Home = styled.div<ThemeProps>`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  min-height: 100vh;
  border: 0.2rem solid transparent;
`;
export const Main = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: 15vw;
  top: 12vh;
  right: 0;
  width: 80%;
  gap: 3rem;
  padding-top: 5vh;
`;
