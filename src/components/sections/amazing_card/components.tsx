import { CgPlayList } from "react-icons/cg";
import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const CardSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  transition: transform 0.8s ease;
  font-size: 2rem;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 2.4rem 6.4rem rgba(0, 0, 0, 0.15);
`;

export const CardSideFront = styled(CardSide)<ThemeProps>`
  background-image: linear-gradient(to right, #561e1e7d, #24249267);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: ${({ theme }) => theme.textSecondary};
  padding: 2rem;
  padding-left: 4rem;
  height: 100%;
  width: 100%;
`;

export const CardSideBack = styled(CardSide)`
  transform: rotateY(180deg);
  text-align: center;
  align-items: flex-start;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #561e1e7d, #24249267);
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-left: 4rem;
`;

export const Card = styled.div`
  perspective: 15rem;
  -moz-perspective: 15rem;
  position: relative;
  position: relative;
  &:hover ${CardSideFront} {
    transform: rotateY(-180deg);
  }

  &:hover ${CardSideBack} {
    transform: rotateY(0);
  }
`;
export const CardPicture = styled(CgPlayList)`
  background-size: cover;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background-blend-mode: screen;
`;

export const CardHeading = styled.div`
  font-size: 4.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSecondary};
  position: absolute;
  top: 20rem;
  right: 3rem;
  width: 75%;
  text-align: right;
`;

export const CardHeadingSpan = styled.span`
  padding: 1rem 1.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-image: linear-gradient(
    to right bottom,
    rgba(white, 0.85),
    rgba(green, 0.85)
  );
`;

export const CardDetails = styled.div`
  padding: 5rem;

  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 2.4rem;
      padding: 1.6rem;

      &:not(:last-child) {
        border-bottom: 0.1px solid rgba(gray, 0.1);
      }
    }
  }
`;

export const CardHeadingBack = styled.div`
  font-size: 2rem;
`;

export const CardPrice = styled.div`
  font-size: 10rem;
  letter-spacing: -0.2rem;
`;
