import styled, { keyframes } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
export const gradient = keyframes<ThemeProps>`
  0% {background: linear-gradient(to top right, #4343432B, #3423422B, #FFEEEE2A);}
  15% {background: linear-gradient(to top right, #FFEEEE4A, #EEFFEE36, #EEEEFF31);}
  30% {background: linear-gradient(to top right, #EEEEFF47, #FFDDCC39, #CCDDFF3E);}
  45% {background: linear-gradient(to top right, #CCDDFF28, #FFCCDD2C, #DDFFCC46);}
  60% {background: linear-gradient(to top right, #DDFFCC3B, #CCFFDD21, #FFDDCC42);}
  75% {background: linear-gradient(to top right, #FFDDCC37, #DDCCFF81, #CCFFDD41);}
  90% {background: linear-gradient(to top right, #CCFFDD2D, #DDCCFF7A, #ffccdd9C);}
  100% {background: linear-gradient(to top right, #FFCCDD14, #ccddff9d, #ddffcc8A);}
`;
export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-family: "Robotto", sans-serif;
  text-align: center;
  padding: 3.2rem;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.6rem;
  font-weight: 700;
  color: #07b8a0;
  letter-spacing: 1px;

  font-weight: 400;
  font-family: "Fugaz One";
  &::after {
    content: "";
    display: block;
    width: 15%;
    height: 0.4rem;
    background-color: #07b8a0;
    margin: 0.8rem 0;
    transition: all 0.3s ease;
  }
`;

export const Subtitle = styled.h2<ThemeProps>`
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
  font-weight: 400;
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    #07b8a0,
    ${({ theme }) => theme.textSecondary}
  );
  text-align: start;
  width: 20vw;
  font-family: "Oswald";
`;

export const StartButton = styled.button`
  padding: 1.3rem 2.1rem;
  font-size: 2rem;
  color: #07b8a0;
  border: none;
  border-radius: 1ren;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 700;
  font-family: "Oswald";
  gap: 1rem;
  &:hover {
    background-color: #05a08c;
    border: none;
    color: white;
  }
  &::after {
    content: "";
    display: block;
    width: 25%;
    height: 0.4rem;
    background-color: #07b8a0;
    margin: -0.4rem 0;
    transition: all 0.3s ease;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

export const Body = styled.div`
  display: flex;
  gap: 10rem;
`;
