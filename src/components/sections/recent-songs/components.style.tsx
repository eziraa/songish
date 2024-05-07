import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
import { GiMusicalNotes } from "react-icons/gi";
import { H0 } from "../../utils/heading.style";

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

export const Title = styled.h2<ThemeProps>`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
`;

export const SongsIcon = styled(GiMusicalNotes)`
  font-size: 150px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const IconisedTitle = styled(H0)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;