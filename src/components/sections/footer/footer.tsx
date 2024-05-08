import {
  FooterContainer,
  FooterText,
  FooterLink,
  CopyRight,
} from "./components.style";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../contexts/theme_context";
import { useContext } from "react";
import { useAppSelector } from "../../../utils/customHook";

const Footer = () => {
  const user = useAppSelector((state) => state.user);
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <FooterContainer
      style={
        user.user.id === ""
          ? {
              marginLeft: "0.4rem",
            }
          : {}
      }
      theme={theme}
    >
      <FooterText theme={theme}>
        Thank you for visiting our music website! We hope you've enjoyed
        exploring the rhythm and melodies we have to offer. Stay tuned for more
        tunes, updates, and musical magic.
      </FooterText>
      <CopyRight theme={theme}>
        © {new Date().getFullYear()} EzAddis All rights reserved. | Designed by
        <FooterLink href=""> Ezira Tigab</FooterLink>
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;
