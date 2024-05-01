import styled from "@emotion/styled";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoPlay } from "react-icons/go";
import { IoMdMusicalNote } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "../../utils/form_field_elements.style";

export const SongContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  padding: 10px 1rem;
  background-color: #031a2e;
  justify-content: space-between;
  :nth-of-type(even) {
    background-color: #122b47de;
  }
  :hover {
    background-color: #284b74de;
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
  gap: 1rem;
  align-items: center;
`;
export const SongInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const SongInfo = styled.div`
  display: flex;
  gap: 2rem;
  color: #c1cbd4ec;
`;

export const SongTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export const SongArtist = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const SongActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SongAlbum = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const SongDuration = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const MusicIcon = styled(IoMdMusicalNote)`
  font-size: 20px;
  color: white;
`;
export const FavoriteIcon = styled(MdFavoriteBorder)`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
export const FavoritedIcon = styled(MdFavorite)`
  font-size: 20px;
  color: #e40ab2;
  cursor: pointer;
`;
export const PlayPause = styled(GoPlay)`
  font-size: 20px;
  position: relative;
  color: white;
  cursor: pointer;
`;

export const VerticalDots = styled(FaEllipsisVertical)`
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const PopUpContainer = styled.div`
  position: absolute;
  top: 0%;
  left: -8rem;
  width: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 89999;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const DeleteButton = styled(Button)`
  margin-top: 1rem;
  background-color: transparent;
  border: 3px solid red;
  color: black;
  transition: all 0.5s;

  &:hover {
    background-color: red;
    color: white;
  }
`;

export const UpdateButton = styled(Button)`
  background-color: transparent;
  border: 3px solid #d38106;
  color: black;
  transition: all 0.5s;
  &:hover {
    background-color: #d38106;
    color: white;
  }
`;

export const SongsNotFound = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;
