import styled from "styled-components";
import { OutLinedButton } from "../../utils/buttons.style";
import { BtnContainer, Paragraph } from "../see_playlist/components.style";
import { RecentContainer } from "../recent-songs/components.style";
import { TbMusicHeart } from "react-icons/tb";
import { ThemeProps } from "../../../styles/theme-interface";

export const Button = styled(OutLinedButton)`
  padding: 10px 20px;
  color: white;
`;

export const FavoriteBtnContainer = styled(BtnContainer)`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const FavSongIcon = styled(TbMusicHeart)`
  font-size: 150px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const FavoriteContainer = styled(RecentContainer)``;

export const FavParagraph = styled(Paragraph)`
  background-image: linear-gradient(
    to top right,

    #ffa600,
    #f92cdb,
    #fdfcfe,
    #ffa600,
    #f92cdb,
    #fefdfe
  );
`;

export const DeleteButton = styled.button<ThemeProps>`
  background-color: transparent;
  border: 1px solid #ff00c8;
  cursor: pointer;
  color: white;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background-color: red;
    color: ${({ theme }) => theme.formBtnTextColor};
  }
`;