import { css } from "@emotion/react";
import styled from "styled-components";

export const notificationStyle = () => css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  width: 300px;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NotificationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
