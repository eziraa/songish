import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
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
  IconPlay,
} from "./components.style";
import { api } from "../../../services/api";

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
  const songs = useAppSelector((state) => state.songs);
  const [trackIndex, setTrackIndex] = useState(
    songs.current_song_to_play
      ? songs.playing_music_list.indexOf(songs.current_song_to_play)
      : 0
  );
  const [totalDuration, setTotalDuration] = useState("00:00");
  const [volume, setVolume] = useState(50); // Initial volume level
  const [currentTime, setCurrentTime] = useState("00:00");

  const [currTrack, setCurrTrack] = useState(
    new Audio(api + songs.current_song_to_play?.song_file)
  );
  const [isPlaying, setIsPlaying] = useState(!currTrack.paused);

  const loadTrack = (address: string) => {
    const track = new Audio(address);
    track.addEventListener("loadedmetadata", () => {
      setTotalDuration(formatTime(track.duration));
    });
    setCurrTrack(track);
    setVolume(50);
  };
  return (
    <Player>
      <Wrapper style={{ position: "relative" }}>
        <Details>
          <PlayingNow>
            {" "}
            {trackIndex} / {songs.playing_music_list.length}{" "}
          </PlayingNow>
          <TrackContainer>
            {isPlaying && (
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
            )}
          </TrackContainer>
          <TrackName> {songs.current_song_to_play?.title} </TrackName>
          <TrackArtist>{songs.current_song_to_play?.artist}</TrackArtist>
        </Details>
        <SliderContainer>
          <CurrentTime>Song Current Time</CurrentTime>
          <SeekSlider
            type="range"
            min="0"
            max={currTrack.duration.toString()}
            value={currTrack.currentTime}
          />
          <TotalDuration>
            {" "}
            {formatTime(songs.current_song_to_play?.duration || 0)}{" "}
          </TotalDuration>
        </SliderContainer>
        <SliderContainer>
          <VolumeContainer>
            <VolumeDownIcon />
            <VolumeSlider type="range" min="0" max="100" value={volume} />
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
              {isPlaying ? <IconPause /> : <IconPlay />}
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
