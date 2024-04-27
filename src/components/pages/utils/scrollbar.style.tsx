import styled from "@emotion/styled";

export const ScrollBar = styled.div`
  background-color: transparent;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
