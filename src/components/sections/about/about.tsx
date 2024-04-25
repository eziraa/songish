import {
  AboutContainer,
  TitleBackGround,
  Title,
  DescriptionContainer,
  TitleSmall,
  Description,
  Paragraph,
  FeatureList,
  FeatureItemBody,
  FeatureItem,
  Image,
} from "./components.style";

const AboutPage = () => {
  return (
    <AboutContainer id="about">
      <TitleBackGround>
        <Title>About my Music website</Title>
      </TitleBackGround>
      <DescriptionContainer>
        <TitleSmall>What is it? `</TitleSmall>
        <Description>
          <Image src="src/assets/images/rmg.png" />
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
            officiis! Aut, impedit. Dolore tempore tempora, reprehenderit est
            dolorum dicta iusto esse quisquam labore, recusandae vero! Debitis
            ut cum ea provident.
          </Paragraph>
        </Description>
      </DescriptionContainer>
      <FeatureList>
        <FeatureItemBody>
          <FeatureItem>
            <TitleSmall>Feature 1</TitleSmall>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              officiis! Aut, impedit. Dolore tempore tempora, reprehenderit est
              dolorum dicta iusto esse quisquam labore, recusandae vero! Debitis
              ut cum ea provident.
            </Paragraph>
          </FeatureItem>
          <Image src="src/assets/images/rmg.png" />
        </FeatureItemBody>
        <FeatureItemBody>
          <Image src="src/assets/images/rmg.png" />

          <FeatureItem>
            <TitleSmall>Feature 1</TitleSmall>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              officiis! Aut, impedit. Dolore tempore tempora, reprehenderit est
              dolorum dicta iusto esse quisquam labore, recusandae vero! Debitis
              ut cum ea provident.
            </Paragraph>
          </FeatureItem>
        </FeatureItemBody>
        <FeatureItemBody>
          <FeatureItem>
            <TitleSmall>Feature 1</TitleSmall>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
              officiis! Aut, impedit. Dolore tempore tempora, reprehenderit est
              dolorum dicta iusto esse quisquam labore, recusandae vero! Debitis
              ut cum ea provident.
            </Paragraph>
          </FeatureItem>
          <Image src="src/assets/images/rmg.png" />
        </FeatureItemBody>
      </FeatureList>
    </AboutContainer>
  );
};

export default AboutPage;
