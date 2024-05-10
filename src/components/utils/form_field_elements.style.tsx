import styled from "styled-components";
import { ThemeProps } from "../../styles/theme-interface";

export const Description = styled.div`
  width: 40%;
`;

export const FormContainer = styled.div`
  width: 40%;
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 32px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.textPrimary};
`;

export const DescriptionText = styled.p<ThemeProps>`
  font-size: 18px;
  color: #0c1321;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: start;
  padding-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  font-weight: 400;
  text-align: start;
  padding: 0.5rem 0;
  font-family: "Robotto", sans-serif;
  color: #12392c;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<ThemeProps>`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Input = styled.input<ThemeProps>`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.inputFieldColor};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.button<ThemeProps>`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.formButtonColor};
  border: none;
  background-color: #0ce6cd;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #06afb5;
  }
`;
export const TextArea = styled.textarea<ThemeProps>`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.inputFieldColor};
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  height: 150px;
`;
