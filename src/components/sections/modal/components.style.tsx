import { CgClose } from "react-icons/cg";
import styled, { keyframes } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
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
export const ModalContent = styled.div<ThemeProps>`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 400;
  width: fit-content;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  animation: ${beVisible} 0.5s ease-in-out;
`;
export const CloseButton = styled(CgClose)<ThemeProps>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  padding: 3px 5px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
