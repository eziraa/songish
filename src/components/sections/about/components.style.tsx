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
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  transform: skew(60deg);
  margin-bottom: 10.4rem;
  width: 19.5vw;
  padding: 1.6rem 0;
  margin-left: -16rem;
  background-color: ${({ theme }) => theme.aboutBackground};
`;
export const TitleBackGround = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.aboutBackground};
  transform: skew(-60deg);
  border-radius: 0 2rem;
  width: 20vw;
  margin: 1.6rem;
  padding: 0.8rem 0;
  height: 1rem;
`;
export const DescriptionContainer = styled.div`
  margin: 3rem;
  padding: 1.6rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rem;
  width: 80%;
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
`;

export const Paragraph = styled.p<ThemeProps>`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  width: 30vw;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  letter-spacing: 0.1rem;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 85%;
  padding: 1.6rem;
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
`;

export const FeatureItemBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10rem;
  width: 100%;
`;

export const Image = styled.img`
  height: 22rem;
  object-fit: cover;
  float: left;
`;

export const ImageSong = styled.div<ThemeProps>`
  background-image: linear-gradient(
      ${({ theme }) => theme.imageBackground},
      ${({ theme }) => theme.imageBackground}
    ),
    url(assets/images/25.jpg);
  background-size: cover;
  height: 22rem;
  width: 30rem;
  margin-left: 3rem;
`;
