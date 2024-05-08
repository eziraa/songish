import styled, { keyframes } from "styled-components";
import { PlaylistResponse } from "../../../typo/playlist/response";
import { timeAgo } from "../../utils/time_ago";
import { ThemeProps } from "../../../styles/theme-interface";
import { PlaylistIcon } from "./components.style";
import React from "react";
import { setMinorTask } from "../../../store/user/userSlice";
import { useAppDispatch } from "../../../utils/customHook";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
} from "../modal/components.style";
import { CgPlayListAdd } from "react-icons/cg";
import { MdPlaylistAddCheck } from "react-icons/md";
interface ModalProps {
  children: React.ReactNode;
  length: number;
}
const Modal = ({ children, length }: ModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <ModalOverlay onClick={() => dispatch(setMinorTask(undefined))}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        style={{ width: Math.ceil(Math.sqrt(length)) * 270 + "px" }}
      >
        <CloseButton onClick={() => dispatch(setMinorTask(undefined))} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const CardContainer = styled.div<ThemeProps>`
  position: relative;
  display: flex;
  border-radius: 10px 0;
  margin: 10px;
  padding: 20px;
  width: 230px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  cursor: pointer;
  overflow: hidden; // Add this line
  &:hover .overlay {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0%);
    height: 100%;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.648);
  color: #f00ba4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 1s ease;
  font-size: large;
  ${CardContainer}:hover & {
    top: 0;
    opacity: 1;
    animation: ${slideDown} 1s;
  }
`;
const PlaylistName = styled.h2`
  margin: 0;
`;

const TimeCreated = styled.p`
  margin: 0;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.textPrimary};
`;

export const PlaylistContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.textPrimary};
`;

const PlaylistCard = ({ playlist }: { playlist: PlaylistResponse }) => (
  <CardContainer>
    <Card>
      <PlaylistName>{playlist.name}</PlaylistName>
      <TimeCreated>{timeAgo(playlist.created_at)}</TimeCreated>
    </Card>
    <PlaylistIcon size={60} />
    <Overlay className="overlay">
      Add to this playlist
      <MdPlaylistAddCheck size={40} />
    </Overlay>
  </CardContainer>
);

const Playlists = ({ playlists }: { playlists: PlaylistResponse[] }) => (
  <Modal length={playlists.length}>
    {playlists.map((playlist) => (
      <PlaylistCard key={playlist.id} playlist={playlist} />
    ))}
    <CardContainer>
      <Card>
        <PlaylistName> Create New Playlist</PlaylistName>
      </Card>
      <CgPlayListAdd size={60} />
      <Overlay className="overlay">
        Create New Playlist
        <CgPlayListAdd size={40} />
      </Overlay>
    </CardContainer>
  </Modal>
);

export default Playlists;
