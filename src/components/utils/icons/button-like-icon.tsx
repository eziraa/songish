import { FiSearch } from "react-icons/fi";
import { HiMusicNote } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import styled from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const SearchIcon = styled(FiSearch)<ThemeProps>`
  position: absolute;
  color: ${({ theme }) => theme.inputFieldColor};
`;

export const MusicIcon = styled(HiMusicNote)`
  size: 2rem;
  color: #ef0a9b;
`;

export const Unfavorite = styled(MdFavorite)`
  size: 2rem;
  color: #ef0a9b;
`;
