import { CgClose } from "react-icons/cg";
import styled, { keyframes } from "styled-components";
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(18, 18, 18, 0.719);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;
export const beVisible = keyframes`
  
  0% {
    opacity: 0;
    transform: translateY(-100vh);
  }
  
  100%{
    transform: translateY(0)
  }
`;
export const ModalContent = styled.div`
  background-color: #09949a;
  padding: 20px;
  border-radius: 5px;
  z-index: 400;
  width: fit-content;
  position: relative;
  animation: ${beVisible} 0.5s ease-in-out;
`;
export const CloseButton = styled(CgClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  padding: 3px 5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
