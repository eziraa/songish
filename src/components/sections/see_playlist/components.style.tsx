import { CgPlayList } from "react-icons/cg";
import styled from "styled-components";
import { OutLinedButton } from "../../utils/buttons.style";

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
  gap: 1rem;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  z-index: 2;
  height: 100%;
  border-radius: 1rem 0;
`;
export const PlaylistIcon = styled(CgPlayList)`
  font-size: 150px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const PlayListBtn = styled(OutLinedButton)`
  color: ${({ theme }) => theme.textPrimary};
  border: 2px solid #f80bb1;
  font-size: 16px;
`;

export const DeleteBtn = styled(OutLinedButton)`
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid #c42020;
  font-size: 16px;
  &:hover {
    background-color: red;
  }
`;