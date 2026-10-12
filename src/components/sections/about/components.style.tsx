import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const AboutContainer = styled.div`
  display: flex;
  padding-top: 25vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1<ThemeProps>`
  font-size: 5rem;
  color: ${({ theme }) => theme.titleColorPrimary};
  text-align: center;
  font-weight: 700;
  transform: skew(60deg);
  margin-bottom: 10.4rem;
  width: 19.5vw;
  min-width: 22rem;
  padding: 1.6rem 0;
  margin-left: -16rem;
  background-color: ${({ theme }) => theme.aboutBackground};

  @media (max-width: 768px) {
    font-size: 3.2rem;
    min-width: 0;
    width: 70vw;
    margin-left: 0;
    margin-bottom: 4rem;
  }
`;
export const TitleBackGround = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.aboutBackground};
  transform: skew(-60deg);
  border-radius: 0 2rem;
  width: 20vw;
  min-width: 24rem;
  margin: 1.6rem;
  padding: 0.8rem 0;
  height: 1rem;

  @media (max-width: 768px) {
    min-width: 0;
    width: 76vw;
    margin: 1.6rem auto;
  }
`;
export const DescriptionContainer = styled.div`
  margin: 3rem;
  padding: 1.6rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
  width: 80%;

  @media (max-width: 768px) {
    margin: 1.6rem 0;
    padding: 0.8rem;
    flex-direction: column;
    width: 100%;
    gap: 1.6rem;
  }
`;
export const Description = styled.div<ThemeProps>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
  margin: 3rem;
  padding: 1.6rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 60rem;

  @media (max-width: 768px) {
    margin: 1.6rem 0;
    padding: 0.8rem;
  }
`;

export const Paragraph = styled.p<ThemeProps>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  width: 30vw;
  min-width: 24rem;
  max-width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
  }
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 85%;
  padding: 1.6rem;

  @media (max-width: 768px) {
    width: 100%;
    gap: 2.4rem;
    padding: 0.8rem;
  }
`;

export const FeatureItem = styled.li<ThemeProps>`
  margin-bottom: 10rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2.4rem;
  width: 25vw;
  min-width: 22rem;
  max-width: 100%;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1.6rem;
    min-width: 0;
    width: 100%;
  }
`;

export const FeatureItemBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 4rem;
  width: 100%;
`;

export const Image = styled.img`
  height: 22rem;
  max-width: 100%;
  object-fit: cover;
`;

export const ImageSong = styled.div<ThemeProps>`
  background-image: linear-gradient(
      ${({ theme }) => theme.imageBackground},
      ${({ theme }) => theme.imageBackground}
    ),
    url(assets/images/25.jpg);
  background-size: cover;
  background-position: center;
  height: 22rem;
  width: 30rem;
  max-width: 100%;
  margin-left: 3rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
