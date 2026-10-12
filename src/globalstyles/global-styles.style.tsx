import { css } from "@emotion/react";
import { Theme } from "../styles/themes";

export const getGlobalStyles = (theme: Theme) => css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", "Inter", system-ui, sans-serif;
    transition: background-color 0.3s linear, color 0.3s linear,
      border-color 0.3s linear;
  }
  :root {
    font-size: 10px;
  }
  html,
  body {
    background-color: ${theme.body};
    color: ${theme.text};
  }
  a {
    color: inherit;
  }
  button {
    color: inherit;
  }
  *:focus-visible {
    outline: 0.2rem solid ${theme.formButtonColor};
    outline-offset: 0.2rem;
  }
`;
