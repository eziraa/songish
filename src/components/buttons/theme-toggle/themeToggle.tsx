import { useContext } from "react";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../contexts/theme_context";
import { lightTheme } from "../../../styles/themes";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { ToggleButton } from "./components.style";
export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <ToggleButton
      onClick={(e) => {
        e.stopPropagation();
        toggleTheme();
      }}
    >
      {theme === lightTheme ? <FiSun /> : <FaMoon />}
    </ToggleButton>
  );
};
