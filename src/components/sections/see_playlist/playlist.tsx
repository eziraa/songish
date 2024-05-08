import styled from "styled-components";
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
        style={{ width: Math.ceil(Math.sqrt(length)) * 240 + "px" }}
      >
        <CloseButton onClick={() => dispatch(setMinorTask(undefined))} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const CardContainer = styled.div<ThemeProps>`
  display: flex;
  border-radius: 10px 0;
  margin: 10px;
  padding: 20px;
  width: 200px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
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
    <PlaylistIcon size={40} />
  </CardContainer>
);

const Playlists = ({ playlists }: { playlists: PlaylistResponse[] }) => (
  <Modal length={playlists.length}>
    {playlists.map((playlist) => (
      <PlaylistCard key={playlist.id} playlist={playlist} />
    ))}
  </Modal>
);

export default Playlists;
