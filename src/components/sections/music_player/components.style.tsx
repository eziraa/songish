import styled, { css } from "styled-components";

export const Player = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 50000;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Wrapper = styled.div`
  border: 2px solid #fff;
  padding: 30px;
  border-radius: 20px;
  background: rgba(23, 22, 22, 0.868);
  z-index: 1000;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TrackArt = styled.div`
  height: 100px;
  width: 100px;
  border: 2px solid #fff;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const PlayingNow = styled.div`
  font-size: 1rem;
  color: #fff;
`;

export const TrackName = styled.h2`
  font-size: 2rem;
  color: #fff;
`;

export const TrackArtist = styled.h3`
  margin-top: 5px;
  font-size: 1.3rem;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrackStyles = css`
  color: #fff;
  margin: 20px;
  padding: 5px 7px;
  border-radius: 5px;
`;
export const RepeatTrack = styled.div`
  ${TrackStyles}
`;

export const NextTrack = styled.div`
  ${TrackStyles}
`;

export const PlayPauseTrack = styled.div`
  ${TrackStyles}
`;

export const PrevTrack = styled.div`
  ${TrackStyles};
  width: 60%;
`;

export const RandomTrack = styled.div`
  ${TrackStyles};
  width: 30%;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const VolumeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlidersStyle = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 5px;
  background: #83a9ff;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #fff;
    border: 2px solid #3774ff;
    cursor: grab;
    border-radius: 100%;
  }

  &:hover {
    opacity: 1;
  }
`;

export const SeekSlider = styled.input`
  ${SlidersStyle}
  width: 100%;
  height: 2px;
`;

export const VolumeSlider = styled.input`
  ${SlidersStyle}
  width: 100%;
  height: 2px;
`;
