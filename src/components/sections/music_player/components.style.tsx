import {
  BsVolumeUp,
  BsVolumeDown,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { FaShuffle, FaRepeat } from "react-icons/fa6";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import styled, { css } from "styled-components";
import { ThemeProps } from "../../../styles/theme-interface";

export const Player = styled.section<ThemeProps>`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 50000;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.playerBackgroundColorPrimary};
`;

export const Wrapper = styled.div<ThemeProps>`
  border: 2px solid ${({ theme }) => theme.textPrimary};
  padding: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.playerBackgroundColorSecondary};
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
  border: 2px solid ${({ theme }) => theme.textPrimary};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const PlayingNow = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const TrackName = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const TrackArtist = styled.h3`
  margin-top: 5px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrackStyles = css`
  color: ${({ theme }) => theme.textPrimary};
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
  background: #023fcd;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.textPrimary};
    border: 2px solid #0240d1;
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

export const TimeStyles = css`
  padding: 10px;
  color: ${({ theme }) => theme.textPrimary};
`;

export const CurrentTime = styled.div`
  ${TimeStyles}
`;

export const TotalDuration = styled.div`
  ${TimeStyles}
`;

export const VolumeIconStyles = css`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 35px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

export const VolumeUpIcon = styled(BsVolumeUp)`
  ${VolumeIconStyles}
`;

export const VolumeDownIcon = styled(BsVolumeDown)`
  ${VolumeIconStyles}
`;

export const IconsStyles = css`
  cursor: pointer;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 900;
  font-size: 20px;
`;

export const ForwardIcon = styled(MdArrowForwardIos)`
  ${IconsStyles}
`;

export const BackIcon = styled(MdArrowBackIos)`
  ${IconsStyles}
`;

export const IconPlay = styled(BsPlayCircleFill)`
  ${IconsStyles}
  font-size: 45px;
`;
export const IconPause = styled(BsPauseCircleFill)`
  ${IconsStyles}
  font-size: 45px;
`;

export const P = styled.p`
  ${IconsStyles}
`;

export const RandomActive = styled(FaShuffle)`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 20px;
`;

export const RepeatIcon = styled(FaRepeat)`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 20px;
`;
