import { useEffect, useState } from "react";
import { H0 } from "../../utils/heading.style";
import { AboutMusic } from "../recent-songs/components.style";
import { SliderBody, SlidesContainer, Slide } from "../slider/components.style";
import {
  DeleteButton,
  FavParagraph,
  FavSongIcon,
  FavoriteBtnContainer,
  FavoriteContainer,
  TimeCreated,
} from "./components.style";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
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
import { PlayListBtn } from "../see_playlist/components.style";
import { GiSpeaker } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { timeAgo } from "../../utils/time_ago";
import { UnderlinedTitle } from "../../utils/titles";

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
      <UnderlinedTitle>Your favorite songs</UnderlinedTitle>
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
                        "linear-gradient(to right, #2626a5a3, #561e1ed5)",
                    }}
                  >
                    <AboutMusic>
                      <H0 style={{ color: "white" }}> {music.title} </H0>
                      <FavParagraph style={{ width: "20vw" }}>
                        Timeless Treasures: A Collection of My Personal
                        Symphony, Each Melody a Cherished Memory 🎶
                        {music.created_at}
                      </FavParagraph>

                      <FavoriteBtnContainer>
                        <PlayListBtn
                          style={{
                            color: "white",
                            fontSize: "20px",
                          }}
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
                          <GiSpeaker size={24} />
                          Listen now
                        </PlayListBtn>
                        <DeleteButton
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
                          <MdFavorite /> Remove
                        </DeleteButton>
                      </FavoriteBtnContainer>
                    </AboutMusic>
                    <FavSongIcon />
                    <TimeCreated> {timeAgo(music.created_at)} </TimeCreated>
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
