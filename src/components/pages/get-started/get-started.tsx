import {
  Header,
  Container,
  HeaderContainer,
  HeaderContainerInner,
  Heading1,
  Paragraph,
  Button,
} from "./components.style";

// React Component
const GetStarted = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <HeaderContainerInner>
              <Heading1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, libero?
              </Heading1>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                vero aspernatur neque ipsam obcaecati! Mollitia sint ducimus
                harum ratione iusto voluptatibus recusandae, tempora doloribus
                veniam?
              </Paragraph>
              <Button>
                <a href="/home" target="_blank" rel="noopener noreferrer">
                  get started
                </a>
              </Button>
            </HeaderContainerInner>
          </HeaderContainer>
        </Container>
      </Header>
    </>
  );
};

export default GetStarted;
