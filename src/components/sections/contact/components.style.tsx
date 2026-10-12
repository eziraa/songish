import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6.4rem;
  width: 100%;
  padding-top: 20vh;
  margin-bottom: 10vh;
  @media screen and (max-width: 1000px) {
    width: 90%;
    padding: 2rem;
    padding-top: 12vh;
  }
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 3rem;
  font-weight: 700;
  width: fit-content;
  min-width: 16rem;
  text-align: start;
  margin-left: 10rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
  color: transparent;
  position: relative;
  background-clip: text;
  position: relative;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.textPrimary},
    #09949a
  );
  &::after {
    content: "";
    width: 30%;
    height: 10%;
    position: absolute;
    bottom: -5%;
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.textPrimary},
      #09949a
    );
  }
  &::before {
    content: "";
    width: 100%;
    height: 10%;
    position: absolute;
    top: -5%;
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.textPrimary},
      #09949a
    );
  }
`;
export const ContactBody = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  max-width: 60rem;
  gap: 3rem;
  flex-direction: column;
`;

export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem 1.6rem;
  width: 100%;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;