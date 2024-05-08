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
import { ContactBody, ContactContainer, Title } from "./components.style";

const ContactPage = () => {
  return (
    <ContactContainer id="contact">
      <Title>Contact Us</Title>
      <ContactBody>
        <Description>
          <DescriptionText>
            Have any questions, suggestions, or just want to say hello? Feel
            free to drop me a message using the form below. I'd love to hear
            from you!
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
      </ContactBody>
    </ContactContainer>
  );
};

export default ContactPage;
