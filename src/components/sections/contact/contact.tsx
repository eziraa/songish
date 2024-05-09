import { useState, useRef } from "react";

import emailjs from "emailjs-com";

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
import { Spinner } from "../spinner/components.style";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_tfrx1er",
        "template_rhoznur",
        e.target,
        "k3GlkvUNSNjbu-6bp"
      )
      .then(
        (_) => {
          setLoading(false);
          formRef.current?.reset();
        },
        (_) => {
          setLoading(false);
        }
      );
  };
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>
      <ContactBody>
        <Description>
          <DescriptionText>
            Have any questions, suggestions, or just want to say hello? Feel
            free to drop me a message using contacts below. I'd love to hear
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
          <Form ref={formRef} onSubmit={sendEmail}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="from_email" name="from_email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea id="message" name="message" required />
            </FormGroup>
            <Button type="submit">
              {loading ? (
                <Spinner
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                  }}
                />
              ) : (
                "Send Message"
              )}
            </Button>
          </Form>
        </FormContainer>
      </ContactBody>
    </ContactContainer>
  );
};

export default ContactPage;
