import styled from "@emotion/styled";
import { ThemeProps } from "../../../styles/theme-inteface";

export const SearchContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.headerColor};
  padding: 15px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;
