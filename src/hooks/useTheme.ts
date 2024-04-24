import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/themes';

export const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    }  else {
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return [theme, toggleTheme];
};