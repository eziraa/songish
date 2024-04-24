import { HeaderComponent } from "./header.styles";
import { ThemeToggleButton } from "../../buttons/theme-toggle/themeToggle";
import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <HeaderComponent>
      {children}
      <ThemeToggleButton />
    </HeaderComponent>
  );
};

export default Header;
