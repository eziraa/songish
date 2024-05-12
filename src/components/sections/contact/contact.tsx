import { useState, useRef } from "react";

import emailjs from "emailjs-com";

import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import {
  DescriptionText,
  FormContainer,
  FormGroup,
  Label,
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
import { SmallSpinner } from "../spinner/spinner";
import { InputField } from "../../utils/animate-input-field";

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
      <ContactBody>
        <Title>Contact Me</Title>
        <Description>
          <DescriptionText
            style={{
              color: "#638a87d3",
            }}
          >
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
      </ContactBody>
      <FormContainer
        style={{
          width: "50vw",
          backgroundColor: "#0c0c0e1e",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form style={{ width: "80%" }} ref={formRef} onSubmit={sendEmail}>
          <FormGroup>
            <InputField>
              <input
                required
                placeholder=""
                type="text"
                id="name"
                name="name"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
              <label htmlFor="name">Your Name</label>
            </InputField>
          </FormGroup>
          <FormGroup>
            <InputField>
              <input
                required
                placeholder=""
                type="email"
                id="from_email"
                name="from_email"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
              <label htmlFor="from_email">Your Email</label>
            </InputField>
          </FormGroup>
          <FormGroup>
            <InputField>
              <Label htmlFor="message">Your Message</Label>
            </InputField>
            <TextArea
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid #09DFADEF",
              }}
              id="message"
              name="message"
              required
            />
          </FormGroup>
          <Button type="submit">
            {loading ? <SmallSpinner /> : "Send Message"}
          </Button>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactPage;
