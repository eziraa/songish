import { CgPlayList } from "react-icons/cg";
import styled from "styled-components";

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.5rem;
  padding: 10px;
  width: 100%;
`;

export const AboutPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  z-index: 2;
  background-size: cover;
  height: 100%;
  border-radius: 1rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const PlaylistIcon = styled(CgPlayList)`
  position: absolute;
  top: 0;
  bottom: 0;
  font-size: 150px;
  color: #dd0a9e;
`;
