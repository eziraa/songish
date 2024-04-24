import { createContext } from 'react';
import { lightTheme } from '../styles/themes';

export const ThemeContext = createContext({
  theme: lightTheme,
  setTheme: () => {},
});