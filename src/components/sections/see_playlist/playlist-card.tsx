import {
  PlaylistContainer,
  AboutPlaylist,
  BtnContainer,
  PlaylistInfo,
  PlaylistIcon,
  DeleteBtn,
  PlayListBtn,
} from "./components.style";
import { Card, CardSideBack, CardSideFront } from "../amazing_card/components";
import { H0, H1 } from "../../utils/heading.style";
import { Slide, SliderBody, SlidesContainer } from "../slider/components.style";
import { BackIcon, ForwardIcon } from "../music_player/components.style";
import { Paragraph } from "./components.style";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { useEffect, useState } from "react";
import {
  ADD_SONG_TO_PLAYLIST,
  SEE_PLAYLIST_SONGS,
  SEE_YOUR_PLAYLIST,
} from "../../../config/constants/user-current-task";
import LoadingSpinner, { SmallSpinner } from "../spinner/spinner";
import { setMajorTask } from "../../../store/user/userSlice";
import {
  deletePlaylistRequest,
  loadPlaylistSongsRequested,
  setCurrentPlaylist,
} from "../../../store/playlist/playlistSlice";
import { api } from "../../../services/api";
import { BsMusicNoteList } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TimeCreated } from "../favorite_songs/components.style";
import { timeAgo } from "../../utils/time_ago";
import { UnderlinedTitle } from "../../utils/titles";

export const PlaylistCard = () => {
  const playlists = useAppSelector((state) => state.playlists);
  const user = useAppSelector((state) => state.user);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [hasPrev, setHasPrev] = useState(true);
  const [hasNext, setHasNext] = useState(true);
  const dispatcher = useAppDispatch();

  useEffect(() => {
    handleNextPrev();
  }, [playlists]);
  const handleNextPrev = () => {
    if (nextIndex >= playlists.playlists.length - 1) {
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
    if (nextIndex + 2 < playlists.playlists.length) {
      setNextIndex(nextIndex + 2);
      setPrevIndex(prevIndex + 2);
    } else if (nextIndex + 1 < playlists.playlists.length) {
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
  if (user.majorTask !== SEE_YOUR_PLAYLIST) return;
  if (playlists.loading) {
    return <LoadingSpinner />;
  }

  if (playlists.playlists.length === 0)
    return (
      <>
        <H0>No Playlists Found</H0>
      </>
    );
  return (
    <PlaylistContainer>
      <UnderlinedTitle>Your PlayList</UnderlinedTitle>
      <SliderBody>
        {hasPrev && <BackIcon onClick={() => prevSlide()} />}
        <SlidesContainer>
          {playlists.playlists.map((playlist, index) => {
            {
              return (
                <Card key={index}>
                  <div key={index} style={{ transform: "translateX(34vw)" }}>
                    <Slide
                      key={index}
                      style={{
                        transform: "translateX(" + -nextIndex * 37 + "vw)",
                        transition: "transform 2s ease-out",
                      }}
                    >
                      <AboutPlaylist>
                        <CardSideFront
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(34, 34, 34, 0.6),rgba(34, 34, 34, 0.6)),url(" +
                              `${api + playlist.image}` +
                              ")",
                            backgroundSize: "cover",
                          }}
                        >
                          <PlaylistInfo>
                            <H0 style={{ color: "#FE06B4" }}>
                              {" "}
                              {playlist.name}{" "}
                            </H0>
                            <H1 style={{ color: "#fff" }}>
                              {" "}
                              {playlist.song.length} songs{" "}
                            </H1>
                            <Paragraph style={{ width: "20vw" }}>
                              Your Gateway to Melodies: Dive into a Symphony of
                              Emotions 🎶
                            </Paragraph>
                          </PlaylistInfo>
                          <PlaylistIcon color="white" />
                        </CardSideFront>
                      </AboutPlaylist>
                      <CardSideBack>
                        <PlaylistInfo>
                          <H0
                            style={{
                              fontSize: "40px",
                              marginTop: "4rem",
                              display: "flex",
                              alignItems: "center",
                              gap: ".5rem",
                            }}
                          >
                            <BsMusicNoteList />
                            <>{playlists.playlists[index].song.length} Songs</>
                          </H0>
                          <BtnContainer>
                            <PlayListBtn
                              onClick={() => {
                                dispatcher(setMajorTask(SEE_PLAYLIST_SONGS));
                                dispatcher(setCurrentPlaylist(playlist));
                                dispatcher(
                                  loadPlaylistSongsRequested({
                                    playlist_id: playlist.id,
                                  })
                                );
                              }}
                            >
                              <BsMusicNoteList />
                              Songs
                            </PlayListBtn>
                            <PlayListBtn
                              onClick={() => {
                                dispatcher(setCurrentPlaylist(playlist));
                                dispatcher(setMajorTask(ADD_SONG_TO_PLAYLIST));
                              }}
                            >
                              <CgPlayListAdd size={18} />
                              Add
                            </PlayListBtn>
                            <DeleteBtn
                              onClick={() => {
                                dispatcher(setCurrentPlaylist(playlist));
                                dispatcher(
                                  deletePlaylistRequest(
                                    Number.parseInt(playlist.id)
                                  )
                                );
                              }}
                            >
                              {playlists.deleting ? (
                                <SmallSpinner />
                              ) : (
                                <>
                                  <RiDeleteBin6Line />
                                  Delete
                                </>
                              )}
                            </DeleteBtn>
                          </BtnContainer>
                        </PlaylistInfo>
                        <PlaylistIcon />
                      </CardSideBack>
                      <TimeCreated>
                        {" "}
                        {timeAgo(playlist.created_at)}{" "}
                      </TimeCreated>
                    </Slide>
                  </div>
                </Card>
              );
            }
          })}
        </SlidesContainer>
        {hasNext && <ForwardIcon onClick={() => nextSlide()} />}
      </SliderBody>
    </PlaylistContainer>
  );
};
