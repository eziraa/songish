import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-inteface";

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  padding: 10px;
  width: 100%;
`;

export const AboutMusic = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;
