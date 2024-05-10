import { styled } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const SearchContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  padding: 1.5rem;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  justify-self: flex-start;
  margin-right: 8rem;
`;

export const SearchField = styled.input<ThemeProps>`
  width: 30rem;
  font-size: 1.6rem;
  outline: none;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  padding-left: 3.5rem; /* Added padding to accommodate icon */
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

export const Label = styled.label<ThemeProps>`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Select = styled.select<ThemeProps>`
  padding: 1rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.searchBackgroundColor};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2rem;
  margin-left: 1rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
`;