import styled from "styled-components";

export const SliderBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 10px;
`;
export const Slide = styled.div`
  height: 45vh;
  width: 35vw;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin: 0 1rem;
  transition: transform 2s ease-out;
`;

export const SlidesContainer = styled.div`
  width: 100%;
  padding: 20px;
  overflow-x: hidden;
  display: flex;
`;
