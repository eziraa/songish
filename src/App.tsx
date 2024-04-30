// src/App.js
import { ThemeProvider } from "styled-components";
import { ThemeContext, ThemeContextType } from "./contexts/theme_context";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./components/pages/homepage/home-page";
import { GlobalStyles } from "./globalstyles/global-styles.style";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./utils";

const App = () => {
  const [theme, toggleTheme] = useTheme(); // Update the destructuring assignment
  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{ theme, toggleTheme } as unknown as ThemeContextType}
      >
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles}></Global>
          <HomePage />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
