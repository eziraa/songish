import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const MiniNotification = styled.div<ThemeProps>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 2rem;
  width: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0rem 1.6rem 0px rgba(0, 0, 0, 0.2);
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
  font-size: 1.9rem;
`;
export const NotificationContent = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 1.4rem;
`;
