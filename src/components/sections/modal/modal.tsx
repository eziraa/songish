import React from "react";
import { setMinorTask } from "../../../store/user/userSlice";
import { useAppDispatch } from "../../../utils/customHook";
import { ModalOverlay, ModalContent, CloseButton } from "./components.style";
interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <ModalOverlay onClick={() => dispatch(setMinorTask(undefined))}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => dispatch(setMinorTask(undefined))} />
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
