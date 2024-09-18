import { HeaderComponent, Logo, LogoContainer, Title } from "./header.styles";
import { ThemeToggleButton } from "../../buttons/theme-toggle/themeToggle";
import { ReactNode } from "react";
const Header = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderComponent>
      <LogoContainer>
        <Logo src="assets/logo.png" />
        <Title>Songish</Title>
      </LogoContainer>
      {children}
      <ThemeToggleButton />
    </HeaderComponent>
  );
};

export default Header;
