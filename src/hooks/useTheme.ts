// src/hooks/useTheme.js
import { useState } from 'react';
import { Theme, lightTheme, darkTheme } from '../styles/themes';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    }else {
      setTheme(lightTheme);
    }
  };


  return [theme, toggleTheme];
};