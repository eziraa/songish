import styled, { keyframes } from "styled-components";

const beVisible = keyframes`
  from {
    opacity: 0;
    transform: skew(40deg);
  }
  to {
    opacity: 1;
    transform: skew(0deg);
  }
`;
export const FormError = styled.span({
  display: "block",
  color: "red",
  fontSize: "1.3rem",
  marginTop: "0.5rem",
});
export const SignUpContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  padding: 1.6rem;
  padding-top: 5rem;
  animation: ${beVisible} 1.5s ease-in-out;
`;
