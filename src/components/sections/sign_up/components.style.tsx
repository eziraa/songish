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
  fontSize: "0.8rem",
  marginTop: "5px",
});
export const SignUpContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  padding: 1rem;
  padding-top: 50px;
  animation: ${beVisible} 1.5s ease-in-out;
`;
