import styled from "styled-components";

export const SliderBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 1rem;
`;
export const Slide = styled.div`
  height: 45vh;
  width: 35vw;
  display: flex;
  align-items: center;
  padding: 3.2rem;
  margin: 0 1.6rem;
  transition: transform 2s ease-out;
  position: relative;
`;

export const SlidesContainer = styled.div`
  width: 100%;
  padding: 2rem;
  overflow-x: hidden;
  display: flex;
`;
