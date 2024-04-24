import { createContext } from 'react';
import { Theme, lightTheme } from '../styles/themes';
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setTheme: () => {},
});