import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { Slide, SliderBody, SlidesContainer } from "../slider/components.style";
import { RecentContainer, AboutMusic, Title } from "./components.style";
import {
  loadSongsRequested,
  setCurrentSongToPlay,
} from "../../../store/song/songSlice";
import LoadingSpinner from "../spinner/spinner";
import { H0 } from "../../utils/heading.style";
import { BackIcon, ForwardIcon } from "../music_player/components.style";
import { Paragraph } from "../../utils/paragraph.style";
import { OutLinedButton } from "../../utils/buttons.style";

export const RecentSection = () => {
  const songs = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [noPrev, setNoPrev] = useState(true);
  const [noNext, setNoNext] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <H0>Resent musics</H0>
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
                        "linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)),url(" +
                        `/src/assets/images/${index + 1}` +
                        ".jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <AboutMusic>
                      <H0> {music.title} </H0>
                      <Paragraph style={{ width: "20vw" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora mollitia saepe alias corrupti ut?
                      </Paragraph>
                      <OutLinedButton
                        onClick={() => {
                          dispatch(
                            setCurrentSongToPlay({
                              song_list: songs.songs,
                              song: music,
                            })
                          );
                        }}
                      >
                        Listen now
                      </OutLinedButton>
                    </AboutMusic>
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
