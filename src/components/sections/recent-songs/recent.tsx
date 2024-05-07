import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { Slide, SliderBody, SlidesContainer } from "../slider/components.style";
import {
  RecentContainer,
  AboutMusic,
  SongsIcon,
  IconisedTitle,
} from "./components.style";
import {
  loadSongsRequested,
  setCurrentSongToPlay,
} from "../../../store/song/songSlice";
import LoadingSpinner from "../spinner/spinner";
import { BackIcon, ForwardIcon } from "../music_player/components.style";
import { Paragraph, PlayListBtn } from "../see_playlist/components.style";
import { GiSpeaker } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { H0 } from "../../utils/heading.style";
import { timeAgo } from "../../utils/time_ago";
import { TimeCreated } from "../favorite_songs/components.style";

export const RecentSection = () => {
  const songs = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [noPrev, setNoPrev] = useState(true);
  const [noNext, setNoNext] = useState(false);

  useEffect(() => {
    dispatch(loadSongsRequested());
  }, [dispatch]);

  useEffect(() => {
    handleNextPrev();
  }),
    [prevIndex, nextIndex];
  const handleNextPrev = () => {
    if (nextIndex < songs.songs.length - 1) {
      setNoNext(false);
    } else {
      setNoNext(true);
    }
    if (prevIndex > 0) {
      setNoPrev(false);
    } else {
      setNoPrev(true);
    }
    console.log(prevIndex, nextIndex);
  };
  const nextSlide = () => {
    if (nextIndex + 2 < songs.songs.length) {
      setNextIndex(nextIndex + 2);
      setPrevIndex(prevIndex + 2);
      console.log(prevIndex, nextIndex);
    } else if (nextIndex + 1 < songs.songs.length) {
      setNextIndex(nextIndex + 1);
      setPrevIndex(prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (prevIndex - 2 >= 0) {
      setNextIndex(nextIndex - 2);
      setPrevIndex(prevIndex - 2);
      handleNextPrev();
    } else if (prevIndex - 1 >= 0) {
      setNextIndex(nextIndex - 1);
      setPrevIndex(prevIndex - 1);
      handleNextPrev();
    }
  };
  if (songs.loading) {
    return <LoadingSpinner />;
  }
  return (
    <RecentContainer>
      <IconisedTitle>
        {" "}
        <IoTimeOutline /> Recently added
      </IconisedTitle>
      <SliderBody>
        {!noPrev && <BackIcon onClick={() => prevSlide()} />}
        <SlidesContainer>
          {songs.songs.map((music, index) => {
            if (true) {
              return (
                <div key={index} style={{ transform: "translateX(34vw)" }}>
                  <Slide
                    key={index}
                    style={{
                      transform: "translateX(" + -nextIndex * 37 + "vw)",
                      transition: "transform 2s ease-out",
                      backgroundImage:
                        "linear-gradient(to right, #561e1ed5, #24249267)",
                    }}
                  >
                    <AboutMusic>
                      <H0 color="white"> {music.title} </H0>
                      <Paragraph style={{ width: "20vw" }}>
                        Echoes of Now: Latest Tracks to Enchant Your Ears 🎵
                      </Paragraph>
                      <PlayListBtn
                        style={{
                          color: "white",
                          fontSize: "24px",
                        }}
                        onClick={() => {
                          dispatch(
                            setCurrentSongToPlay({
                              song_list: songs.songs,
                              song: music,
                            })
                          );
                        }}
                      >
                        <GiSpeaker />
                        Listen now
                      </PlayListBtn>
                    </AboutMusic>
                    <SongsIcon />
                    <TimeCreated>{timeAgo(music.created_at)}</TimeCreated>
                  </Slide>
                </div>
              );
            }
          })}
        </SlidesContainer>
        {!noNext && <ForwardIcon onClick={() => nextSlide()} />}
      </SliderBody>
    </RecentContainer>
  );
};
