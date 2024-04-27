import { styled } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";
import { Form } from "formik";

export const SearchContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  padding: 15px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchForm = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SearchField = styled.input<ThemeProps>`
  width: 300px;
  font-size: 16px;
  outline: none;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  padding-left: 35px; /* Added padding to accommodate icon */
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const Select = styled.select<ThemeProps>`
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 20px;
  margin-left: 10px;
  padding-right: 20px;
  border-radius: 5px;
`;