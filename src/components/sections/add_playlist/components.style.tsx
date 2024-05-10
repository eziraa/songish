import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const beVisible = keyframes`
  from {
    opacity: 0.6;
    transform: skew(40deg);
  }
  to {
    opacity: 1;
    transform: skew(0deg);
  }
`;
export const AddPlaylistContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  padding: 1.6rem;
  padding-top: 5rem;
  animation: ${beVisible} 1.5s;
`;
