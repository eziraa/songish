import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";

export const BackIcon = styled(MdArrowBackIos)`
  color: #f932d1;
  font-size: 40px;
  width: 50px;
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  text-align: right;
  line-height: 0.8;
  padding-left: 10px;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #f932d1;
    color: white;
  }
`;
export const ForwardIcon = styled(MdArrowForwardIos)`
  color: #f932d1;
  font-size: 40px;
  width: 50px;
  background-color: transparent;
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  line-height: 0.8;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #f932d1;
    color: white;
  }
`;
