import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  margin: 3.2rem;
  border-radius: 0.8rem;
`;

export const LoginFormContainer = styled.div`
  width: 30rem;
  border-radius: 1rem;
  padding: 3.2rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Roboto";
  color: transparent;
  font-size: 2.5rem;
  position: relative;
  text-align: start;
  width: 13rem;
  background-clip: text;
  background-image: linear-gradient(to right, #14beaa, white);
  &::after {
    content: "";
    width: 100%;
    top: 0.4rem;
    left: 0;
    height: 0.5rem;
    background: linear-gradient(to right, #14beaa, white);
    margin-top: 2.6rem;
    position: absolute;
  }
`;
  