import { useEffect, useState } from "react";
import { H0 } from "../../utils/heading.style";
import { Paragraph } from "../about/components.style";
import { AboutMusic } from "../recent-songs/components.style";
import { SliderBody, SlidesContainer, Slide } from "../slider/components.style";
import {
  Button,
  FavoriteBtnContainer,
  FavoriteContainer,
} from "./components.style";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { SongResponse } from "../../../typo/songs/response";
import {
  REMOVE_SONG_FROM_FAVORITE,
  SEE_MY_FAVORITE_SONGS,
} from "../../../config/constants/user-current-task";
import LoadingSpinner from "../spinner/spinner";
import { BackIcon, ForwardIcon } from "../music_player/components.style";
import { setCurrentSongToPlay } from "../../../store/song/songSlice";
import {
  removeSongFromMyFavoriteRequested,
  setMinorTask,
} from "../../../store/user/userSlice";
import { Unfavorite } from "../../utils/icons/button-like-icon";

export const FavoriteSongs = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [hasPrev, setHasPrev] = useState(true);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    handleNextPrev();
  }, [user.favorite_songs]);
  const handleNextPrev = () => {
    if (nextIndex >= user.favorite_songs.length - 1) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }
    if (prevIndex <= 0) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }
  };
  const nextSlide = () => {
    if (nextIndex + 2 < user.favorite_songs.length) {
      setNextIndex(nextIndex + 2);
      setPrevIndex(prevIndex + 2);
    } else if (nextIndex + 1 < user.favorite_songs.length) {
      setNextIndex(nextIndex + 1);
      setPrevIndex(prevIndex + 1);
    }
    handleNextPrev();
  };

  const prevSlide = () => {
    if (prevIndex - 2 >= 0) {
      setNextIndex(nextIndex - 2);
      setPrevIndex(prevIndex - 2);
    } else if (prevIndex - 1 >= 0) {
      setNextIndex(nextIndex - 1);
      setPrevIndex(prevIndex - 1);
    }
    handleNextPrev();
  };

  if (user.majorTask !== SEE_MY_FAVORITE_SONGS) return;
  if (user.loading) {
    return <LoadingSpinner />;
  }
  return (
    <FavoriteContainer>
      <H0>Your favorite songs</H0>
      <SliderBody>
        {hasPrev && <BackIcon onClick={() => prevSlide()} />}
        <SlidesContainer>
          {user.favorite_songs.map((music, index, music_list) => {
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
                      <FavoriteBtnContainer>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              setCurrentSongToPlay({
                                song: music,
                                song_list: music_list,
                              })
                            );
                          }}
                        >
                          Listen now
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(setMinorTask(REMOVE_SONG_FROM_FAVORITE));
                            dispatch(
                              removeSongFromMyFavoriteRequested({
                                user_id: user.user.id || "",
                                song_id: music.id,
                              })
                            );
                          }}
                        >
                          <Unfavorite /> Remove
                        </Button>
                      </FavoriteBtnContainer>
                    </AboutMusic>
                  </Slide>
                </div>
              );
            }
          })}
        </SlidesContainer>
        {hasNext && <ForwardIcon onClick={() => nextSlide()} />}
      </SliderBody>
    </FavoriteContainer>
  );
};
