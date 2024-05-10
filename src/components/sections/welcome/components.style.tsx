import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-family: "Robotto", sans-serif;
  text-align: center;
  padding: 2rem;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #07b8a0;
  letter-spacing: 1px;
  &::after {
    content: "";
    display: block;
    width: 15%;
    height: 4px;
    background-color: #07b8a0;
    margin: 0.5rem 0;
    transition: all 0.3s ease;
  }
`;

export const Subtitle = styled.h2<ThemeProps>`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.textSecondary},
    #07b8a0
  );
  text-align: start;
  width: 30vw;
`;

export const StartButton = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1.3rem;
  color: #fff;
  background-color: #07b8a0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #05a08c;
    border: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

export const Body = styled.div`
  display: flex;
  gap: 6rem;
`;
