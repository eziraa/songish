import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
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
import {
  ContactBody,
  ContactContainer,
  ContactItem,
  ContactList,
  Title,
} from "./components.style";

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
          <ContactList>
            <ContactItem style={{ color: "#f66140" }}>
              <a href="mailto:ezirayallew@gmail.com">
                <FaEnvelope size={24} />
                Email
              </a>
            </ContactItem>
            <ContactItem style={{ color: "#0765b1" }}>
              <a href="https://t.me/eza_na_wi">
                <FaTelegram size={24} />
                Telegram
              </a>
            </ContactItem>
            <ContactItem style={{ color: "#099cfd" }}>
              <a href="https://www.linkedin.com/in/ezira-yallew-1a25292b7/">
                <FaLinkedin size={24} />
                LinkedIn
              </a>
            </ContactItem>
            <ContactItem>
              <a href="https://github.com/eziraa">
                <FaGithub size={24} />
                GitHub
              </a>
            </ContactItem>
          </ContactList>
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
