import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const beVisible = keyframes`
  from {
    opacity: 0.6;
    transform: skew(40deg);
  }
  to {
    opacity: 1;
    transform: skew(0deg);
  }
`;
export const AddSongContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45vw;
  padding: 3rem;
  padding-top: 5rem;
  animation: ${beVisible} 1.5s;
`;
