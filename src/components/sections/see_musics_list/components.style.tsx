import { FaEllipsisVertical } from "react-icons/fa6";
import { GoPlay } from "react-icons/go";
import { IoMdMusicalNote } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../utils/form_field_elements.style";
import { ThemeProps } from "../../../styles/theme-interface";
import { styled } from "styled-components";
import { Title } from "../recent-songs/components.style";
import { BiPause } from "react-icons/bi";
export const SongDisplayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding-top: 3.2rem;
`;

export const SongContainer = styled.div<ThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  padding: 1rem 1.6rem;
  background-color: ${({ theme }) => theme.songTableBackgroundColor};
  justify-content: space-between;
  color: ${({ theme }) => theme.textSecondary};
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.songsListItemBGColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.songsListItemBGHoverColor};
    cursor: pointer;
  }
`;

export const SongHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const SongMetaData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
`;
export const SongInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const SongInfo = styled.div<ThemeProps>`
  display: flex;
  gap: 3.2rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const SongTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
`;
export const SongsListTitle = styled(Title)`
  text-align: left;
  width: 90%;
  transform: skew(-10deg);
`;

export const SongArtist = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const SongActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  justify-items: start;
  min-width: 7vw;
`;

export const SongAlbum = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const SongDuration = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;

export const MusicIcon = styled(IoMdMusicalNote)`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;
export const FavoriteIcon = styled(MdFavoriteBorder)`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
`;
export const FavoritedIcon = styled(MdFavorite)`
  font-size: 2rem;
  color: #e40ab2;
  cursor: pointer;
`;
export const Play = styled(GoPlay)`
  font-size: 2rem;
  position: relative;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
`;
export const Pause = styled(BiPause)`
  font-size: 2rem;
  position: relative;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
`;

export const VerticalDots = styled(FaEllipsisVertical)`
  font-size: 2rem;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
`;

export const PopUpContainer = styled.div<ThemeProps>`
  position: absolute;
  top: 0%;
  right: 0;
  width: 20rem;
  background-color: ${({ theme }) => theme.backgroundSecondaryHover};
  border: 1px solid ${({ theme }) => theme.backgroundSecondary};
  padding: 1rem;
  padding-right: 2.5rem;
  padding-top: 2.5rem;
  z-index: 89999;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textSecondary};
  gap: 0.5rem;
`;

export const DeleteButton = styled(Button)`
  margin-top: 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 3px solid red;
  transition: all 0.5s;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  color: ${({ theme }) => theme.textPrimary};
  &:hover {
    background-color: red;
    color: #ffffff;
  }
  font-size: 1.4rem;
`;

export const UpdateButton = styled(Button)`
  background-color: transparent;
  border: 3px solid #d38106;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.5s;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.4rem;
  &:hover {
    background-color: #d38106;
    color: #ffffff;
  }
`;

export const SongsNotFound = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
`;
