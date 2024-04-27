import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./components.style";
interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
