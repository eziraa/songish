import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const MiniNotification = styled.div<ThemeProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.notificationBackground};
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
`;
export const NotificationContent = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;
  align-items: center;
  gap: 1.5rem;
`;
