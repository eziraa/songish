import { css } from "@emotion/react";

export const notificationStyle = (color: any) => css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  background-color: ${color};
  color: white;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease-in-out;
  z-index: 1000;
  /* &.show {
    display: block;
  }
  &.hide {
    display: none;
  } */
`;
