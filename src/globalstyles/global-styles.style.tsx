import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: monospace;
    transition: background-color 0.5s linear, color 0.5s linear;
  }
  :root {
    font-size: 10px;
  }
`;
