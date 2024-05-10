import { CgPlayList } from "react-icons/cg";
import styled from "styled-components";
import { OutLinedButton } from "../../utils/buttons.style";

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.8rem;
  padding: 1rem;
  width: 100%;
  padding: 3.2rem;
`;

export const AboutPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1.6rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
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
  align-items: start;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  z-index: 2;
  height: 100%;
  border-radius: 1.6rem 0;
`;
export const PlaylistIcon = styled(CgPlayList)`
  font-size: 15rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const PlayListBtn = styled(OutLinedButton)`
  color: ${({ theme }) => theme.textPrimary};
  border: 2px solid #f80bb1;
  font-size: 1.6rem;
  min-width: 8rem;
`;

export const DeleteBtn = styled(OutLinedButton)`
  color: ${({ theme }) => theme.textSecondary};
  border: 2px solid #c42020;
  font-size: 1.6rem;
  &:hover {
    background-color: red;
  }
  min-width: 11rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  width: 30vw;
  color: transparent;
  background-image: linear-gradient(
    to right,

    #ffa600,
    #f92cdb,
    #fdfcfe,
    #ffa600,
    #f92cdb,
    #fefdfe
  ); /* Set the background color */
  background-clip: text; /* Set the text color to transparent */
`;