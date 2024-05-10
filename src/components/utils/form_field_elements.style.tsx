import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-interface";
import { FaCamera } from "react-icons/fa6";

export const Description = styled.div`
  width: 40%;
`;

export const FormContainer = styled.div`
  width: 40%;
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 3.2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const DescriptionText = styled.p<ThemeProps>`
  font-size: 1.8rem;
  color: #0c1321;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  padding-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 15vw;
  font-weight: 400;
  text-align: start;
  padding: 1rem 0;
  font-family: "Robotto", sans-serif;
  color: #12392c;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  gap: 0.6rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<ThemeProps>`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input<ThemeProps>`
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.inputFieldColor};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  width: 100%;
`;

export const Button = styled.button<ThemeProps>`
  padding: 1.2rem 2rem;
  background-color: ${({ theme }) => theme.formButtonColor};
  border: none;
  background-color: #0ce6cd;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #06afb5;
  }
`;
export const TextArea = styled.textarea<ThemeProps>`
  padding: 1.2rem;
  border: 1px solid ${({ theme }) => theme.inputFieldColor};
  border-radius: 0.5rem;
  width: 100%;
  font-size: 1.6rem;
  height: 15rem;
`;

const NewChannel = styled.div`
  width: 35rem;
  position: absolute;
  border-radius: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $color-primary-white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  color: $color-primary-blue;
  z-index: 20;

  ${(props) => props.hidden && "display: none;"}
`;

const Upper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

const Lower = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  width: 8rem;
  height: 6rem;
  border-radius: 50%;
  background-color: blue;
  position: relative;
`;

const Icon = styled(FaCamera)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Descriprion = styled.div`
  font-size: medium;
`;

const InputElement = styled.input`
  font-size: medium;
  border: none;
  width: 100%;
  border-bottom: 2px solid white;
`;
