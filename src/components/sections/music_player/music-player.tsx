import { BackIcon, ForwardIcon } from "../../utils/icons/navigation_icon";
import {
  Player,
  Wrapper,
  Details,
  PlayingNow,
  TrackContainer,
  TrackName,
  TrackArtist,
  SliderContainer,
  SeekSlider,
  VolumeContainer,
  VolumeSlider,
  ButtonContainer,
  RandomTrack,
  PrevTrack,
  PlayPauseTrack,
  NextTrack,
  RepeatTrack,
  VolumeDownIcon,
  VolumeUpIcon,
  TotalDuration,
  CurrentTime,
  RepeatIcon,
  IconPause,
  RandomActive,
  Loader,
  Stroke,
} from "./components.style";

export const formatTime = (seconds: number) => {
  // Format seconds into MM:SS format
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (remainingSeconds < 10 ? "0" : "") +
    remainingSeconds
  );
};

export default function PlayerComponent() {
  return (
    <Player>
      <Wrapper style={{ position: "relative" }}>
        <Details>
          <PlayingNow>PLAYING current_index / Total_song</PlayingNow>
          <TrackContainer>
            <Loader>
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
              <Stroke />
            </Loader>
          </TrackContainer>
          <TrackName> Track Name </TrackName>
          <TrackArtist> Artist </TrackArtist>
        </Details>
        <SliderContainer>
          <CurrentTime>Song Current Time</CurrentTime>
          <SeekSlider type="range" min="0" />
          <TotalDuration>Song Duration</TotalDuration>
        </SliderContainer>
        <SliderContainer>
          <VolumeContainer>
            <VolumeDownIcon />
            <VolumeSlider type="range" min="0" max="100" />
            <VolumeUpIcon />
          </VolumeContainer>
          <ButtonContainer>
            <RandomTrack>
              <RandomActive />
            </RandomTrack>
            <PrevTrack>
              <BackIcon />
            </PrevTrack>
            <PlayPauseTrack>
              <IconPause />
            </PlayPauseTrack>
            <NextTrack>
              <ForwardIcon />
            </NextTrack>
            <RepeatTrack>
              <RepeatIcon />
            </RepeatTrack>
          </ButtonContainer>
        </SliderContainer>
      </Wrapper>
    </Player>
  );
}
