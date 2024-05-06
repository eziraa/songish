import { useEffect, useState } from "react";
import { H0 } from "../../utils/heading.style";
import { Paragraph } from "../about/components.style";
import { AboutMusic } from "../recent-songs/components.style";
import { SliderBody, SlidesContainer, Slide } from "../slider/components.style";
import { FavoriteContainer } from "./components.style";
import { useAppSelector } from "../../../utils/customHook";
import { SongResponse } from "../../../typo/songs/response";
import { SEE_MY_FAVORITE_SONGS } from "../../../config/constants/user-current-task";
import LoadingSpinner from "../spinner/spinner";
import { BackIcon, ForwardIcon } from "../music_player/components.style";

export const FavoriteSongs = () => {
  const user = useAppSelector((state) => state.user);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [noPrev, setNoPrev] = useState(true);
  const [noNext, setNoNext] = useState(false);
  const [song_list, setSongList] = useState<SongResponse[]>([]);
  useEffect(() => {
    setSongList(user.user.favorite_songs);
  }, [user.user, user.minorTask]);

  useEffect(() => {
    handleNextPrev();
  }, [prevIndex, nextIndex]);
  const handleNextPrev = () => {
    if (nextIndex < (song_list ? song_list.length - 1 : 0)) {
      setNoNext(false);
    } else {
      setNoNext(true);
    }
    if (prevIndex > 0) {
      setNoPrev(false);
    } else {
      setNoPrev(true);
    }
  };
  const nextSlide = () => {
    if (song_list?.length || 0 > 0)
      if (nextIndex + 2 < (song_list ? song_list.length : 0)) {
        setNextIndex(nextIndex + 2);
        setPrevIndex(prevIndex + 2);
      } else if (nextIndex + 1 < (song_list ? song_list.length : 0)) {
        setNextIndex(nextIndex + 1);
        setPrevIndex(prevIndex + 1);
      }
  };

  const prevSlide = () => {
    if (song_list?.length || 0 > 0)
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

  if (user.majorTask !== SEE_MY_FAVORITE_SONGS) return;
  if (user.loading) {
    return <LoadingSpinner />;
  }
  return (
    <FavoriteContainer>
      <H0>Your favorite songs</H0>
      <SliderBody>
        {!noPrev && <BackIcon onClick={() => prevSlide()} />}
        <SlidesContainer>
          {song_list?.map((music, index, music_list) => {
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
                    </AboutMusic>
                  </Slide>
                </div>
              );
            }
          })}
        </SlidesContainer>
        {!noNext && <ForwardIcon onClick={() => nextSlide()} />}
      </SliderBody>
    </FavoriteContainer>
  );
};
