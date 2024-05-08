import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  width: 80%;
  margin-bottom: 20vh;
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 3rem;
  font-weight: 700;
  color: transparent;
  position: relative;
  background-clip: text;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.textPrimary},
    #09949a
  );
  &::after {
    content: "";
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: -10%;
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.backgroundPrimary},
      ${({ theme }) => theme.backgroundPrimary}
    );
    clip-path: polygon(
      0 0,
      10% 100%,
      20% 0,
      30% 100%,
      40% 0,
      50% 100%,
      60% 0,
      70% 100%,
      80% 0,
      90% 100%,
      100% 0
    );
  }
  &::before {
    content: "";
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: -20%;
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.textPrimary},
      #09949a
    );
    clip-path: polygon(
      0 0,
      10% 100%,
      20% 0,
      30% 100%,
      40% 0,
      50% 100%,
      60% 0,
      70% 100%,
      80% 0,
      90% 100%,
      100% 0
    );
  }
`;
export const ContactBody = styled.div`
  display: flex;
  align-items: center;
`;



export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;