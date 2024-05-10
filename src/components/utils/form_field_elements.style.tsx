import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-interface";

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
  color: black;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  padding-top: 2rem;
  max-width: 30vw;
  letter-spacing: 1px;
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
  margin-top: 2rem;
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
    color: white;
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
