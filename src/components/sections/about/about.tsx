import { UnderlinedTitle } from "../../utils/titles";
import {
  AboutContainer,
  TitleBackGround,
  Title,
  DescriptionContainer,
  Description,
  Paragraph,
  FeatureList,
  FeatureItemBody,
  FeatureItem,
  Image,
  ImageSong,
} from "./components.style";

const AboutPage = () => {
  return (
    <AboutContainer id="about">
      <TitleBackGround>
        <Title>About me</Title>
      </TitleBackGround>
      <DescriptionContainer>
        <Image
          style={{ borderRadius: "50%" }}
          src="src/assets/images/ezira.jpg"
        />
        <Description>
          <UnderlinedTitle>Who? </UnderlinedTitle>
          <Paragraph>
            Hello! I'm{" "}
            <span
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(to right, #893458, #9956ff)",
              }}
            >
              Ezira Tigab
            </span>{" "}
            I'm a 4th year Software Engineering student at Bahir Dar University.
            I'm currently exploring full-stack development and have a keen
            interest in creating dynamic and user-friendly applications.
          </Paragraph>
        </Description>
      </DescriptionContainer>
      <FeatureList>
        <FeatureItemBody>
          <FeatureItem>
            <UnderlinedTitle>Skills</UnderlinedTitle>
            <Paragraph>
              I have experience with a variety of programming languages
              including C++, JavaScript, Java, and Python. I'm also familiar
              with several frameworks and libraries such as Bootstrap, Tailwind
              CSS, Styled Components, React, and Django.
            </Paragraph>
          </FeatureItem>
          <Image src="src/assets/images/languages.webp" />
        </FeatureItemBody>
        <FeatureItemBody>
          <ImageSong></ImageSong>

          <FeatureItem>
            <UnderlinedTitle>About the app</UnderlinedTitle>
            <Paragraph>
              This song app is a testament to my learning journey. It's built
              using React for the frontend, Django for the backend, and Styled
              Components for styling. It's a simple yet functional music player
              that allows you to enjoy your favorite tunes anytime, anywhere.
            </Paragraph>
          </FeatureItem>
        </FeatureItemBody>
      </FeatureList>
    </AboutContainer>
  );
};

export default AboutPage;
