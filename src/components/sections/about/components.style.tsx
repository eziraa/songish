import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const AboutContainer = styled.div`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1<ThemeProps>`
  font-size: 3rem;
  color: ${({ theme }) => theme.titleColorPrimary};
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  transform: skew(60deg);
`;
export const TitleBackGround = styled.div<ThemeProps>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.aboutBackground};
  transform: skew(-60deg);
  border-radius: 0 20px;
  width: 45vw;
  margin: 1rem;
  padding: 0.5rem;
`;
export const DescriptionContainer = styled.div`
  margin: 2rem;
  padding-top: 1rem;
`;
export const Description = styled.div<ThemeProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  gap: 4rem;
  flex-direction: row;
  align-items: center;
`;

export const Paragraph = styled.p<ThemeProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
  width: 30vw;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 85%;
  padding: 1rem;
`;

export const FeatureItem = styled.li<ThemeProps>`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  width: 25vw;
`;

export const FeatureItemBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;
export const TitleSmall = styled.h2<ThemeProps>`
  font-size: 2rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
`;

export const Image = styled.img`
  height: 14rem;
  object-fit: cover;
  float: left;
`;

export const ImageSong = styled.div<ThemeProps>`
  background-image: linear-gradient(
      ${({ theme }) => theme.imageBackground},
      ${({ theme }) => theme.imageBackground}
    ),
    url(src/assets/images/25.jpg);
  background-size: cover;
  height: 16rem;
  width: 20rem;
  margin-left: 2rem;
`;
