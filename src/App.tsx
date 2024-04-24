// src/App.js
import { ThemeProvider } from "styled-components";
import { ThemeContext, ThemeContextType } from "./contexts/theme_context";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/sections/header/header";

const App = () => {
  const [theme, toggleTheme] = useTheme(); // Update the destructuring assignment
  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme } as unknown as ThemeContextType}
    >
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
