import {
  DescriptionText,
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  Form,
} from "../../utils/form_field_elements.style";
import { Description } from "../about/components.style";
import { Title } from "../recent-songs/components.style";
import { ContactContainer } from "./components.style";

const ContactPage = () => {
  return (
    <ContactContainer id="contact">
      <Description>
        <Title>Contact Us</Title>
        <DescriptionText>
          Have any questions, suggestions, or just want to say hello? Feel free
          to drop us a message using the form below. We'd love to hear from you!
        </DescriptionText>
      </Description>
      <FormContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea id="message" rows="6" />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactPage;
