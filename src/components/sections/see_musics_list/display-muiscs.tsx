import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  DeleteButton,
  FavoriteIcon,
  FavoritedIcon,
  MusicIcon,
  Pause,
  Play,
  PopUpContainer,
  SongActions,
  SongAlbum,
  SongArtist,
  SongContainer,
  SongDuration,
  SongHeader,
  SongInfo,
  SongInfoContainer,
  SongMetaData,
  SongTitle,
  SongsListTitle,
  SongsNotFound,
  UpdateButton,
  VerticalDots,
} from "./components.style";
import { SongResponse } from "../../../typo/songs/response";
import LoadingSpinner from "../spinner/spinner";
import { ScrollBar } from "../../utils/scrollbar.style";
import {
  deleteSongRequest,
  setCurrentSongForAction,
  setCurrentSongToPlay,
} from "../../../store/song/songSlice";
import { formatTime } from "../music_player/music-player";
import { CloseButton } from "../modal/components.style";
import {
  addFavoriteSongRequested,
  loadMyFavoriteSongsRequested,
  removeSongFromMyFavoriteRequested,
  setMinorTask,
} from "../../../store/user/userSlice";
import {
  ADD_SONG_TO_PLAYLIST,
  SEARCH_SONG_FROM_ALL,
  SEE_ALL_SONGS,
  SEE_MY_SONGS,
  SEE_PLAYLIST_SONGS,
  UPDATE_SONG,
} from "../../../config/constants/user-current-task";
import { Button } from "../../utils/form_field_elements.style";
import {
  addSongToPlaylistRequested,
  removeSongFromPlaylistRequested,
} from "../../../store/playlist/playlistSlice";
import { ClipLoader } from "react-spinners";

interface PopUPProps {
  popUpIndex: number;
  setPopUpIndex: (index: number) => void;
}
function MusicTable({ popUpIndex, setPopUpIndex }: PopUPProps) {
  const songs = useAppSelector((state) => state.songs);
  const user = useAppSelector((state) => state.user);
  const playlists = useAppSelector((state) => state.playlists);

  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);
  const dispatch = useAppDispatch();
  const [actionItemIndex, setActionItemIndex] = useState(-1);

  useEffect(() => {
    if (user.majorTask === SEE_ALL_SONGS) {
      setSongList(songs.songs);
      dispatch(loadMyFavoriteSongsRequested({ user_id: user.user.id }));
    } else if (user.majorTask === ADD_SONG_TO_PLAYLIST)
      setSongList(songs.songs);
    else if (user.majorTask === SEE_PLAYLIST_SONGS)
      setSongList(playlists.songs);
    else if (user.majorTask === SEE_MY_SONGS) setSongList(user.user.my_songs);
    else {
      setSongList(songs.query_set);
    }
  }, [
    songs.songs,
    user.user,
    songs.query_set,
    playlists.songs,

    user.majorTask,
  ]);

  const onDelete = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(deleteSongRequest(Number(song.id)));
    setPopUpIndex(-1);
  };
  const onUpdate = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(setMinorTask(UPDATE_SONG));
    setPopUpIndex(-1);
  };
  const onSelect = (song: SongResponse) => {
    dispatch(
      addSongToPlaylistRequested({
        playlist_id: playlists.currentPlaylist?.id || "",
        song_id: song.id,
      })
    );
  };

  if (
    ![
      SEE_ALL_SONGS,
      SEE_PLAYLIST_SONGS,
      ADD_SONG_TO_PLAYLIST,
      SEARCH_SONG_FROM_ALL,
      SEE_MY_SONGS,
    ].includes(user.majorTask || "")
  )
    return;
  if (songs.loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <SongsListTitle>
        All songs
        {user.majorTask == SEE_PLAYLIST_SONGS && " from this playlist"}{" "}
        {user.majorTask == SEARCH_SONG_FROM_ALL && " Based on your query"}{" "}
      </SongsListTitle>
      <ScrollBar
        style={{
          position: "relative",
          width: "70vw",
          maxHeight: "60vh",
        }}
      >
        {song_list.length === 0 ? (
          <SongHeader>
            <SongsNotFound>No songs found</SongsNotFound>
          </SongHeader>
        ) : (
          song_list.map((song, index, song_list) => (
            <SongContainer key={index}>
              <SongMetaData>
                {song.id !== songs.current_song_to_play?.id ? (
                  <Play
                    onClick={async () => {
                      await dispatch(
                        setCurrentSongToPlay({
                          song: undefined,
                          song_list: [],
                        })
                      );
                      setTimeout(() => {
                        dispatch(
                          setCurrentSongToPlay({
                            song,
                            song_list,
                          })
                        );
                      }, 0);
                    }}
                  />
                ) : (
                  <Pause
                    onClick={async () => {
                      await dispatch(
                        setCurrentSongToPlay({
                          song: undefined,
                          song_list: [],
                        })
                      );
                    }}
                  />
                )}
                <MusicIcon />
                <SongInfoContainer>
                  <SongTitle> {song.title} </SongTitle>
                  <SongInfo>
                    <SongArtist> {song.artist} </SongArtist>
                    <SongAlbum> {song.album || "No Album"} </SongAlbum>
                  </SongInfo>
                </SongInfoContainer>
              </SongMetaData>
              <SongActions>
                {user.majorTask === ADD_SONG_TO_PLAYLIST ? (
                  <Button
                    style={{
                      backgroundColor: "blue",
                      textAlign: "center",
                      width: "110px",
                    }}
                    onClick={() => {
                      setActionItemIndex(index);
                      onSelect(song);
                    }}
                  >
                    {playlists.adding && index == actionItemIndex ? (
                      <ClipLoader
                        color="#4A90E2"
                        loading={playlists.adding}
                        size={20}
                      />
                    ) : (
                      "SELECT"
                    )}
                  </Button>
                ) : null}
                {user.majorTask === SEE_PLAYLIST_SONGS && (
                  <Button
                    style={{ backgroundColor: "red" }}
                    onClick={async (e) => {
                      await dispatch(
                        removeSongFromPlaylistRequested({
                          playlist_id: playlists.currentPlaylist?.id || "",
                          song_id: song.id,
                        })
                      );
                      setSongList(
                        song_list.filter((item) => item.id !== song.id)
                      );
                    }}
                  >
                    Remove
                  </Button>
                )}
                {user.favorite_songs.some(
                  (item, index) => song.id === item.id
                ) ? (
                  <FavoritedIcon
                    onClick={() => {
                      setActionItemIndex(index);
                      dispatch(
                        removeSongFromMyFavoriteRequested({
                          user_id: user.user.id || "",
                          song_id: song.id,
                        })
                      );
                    }}
                  />
                ) : (
                  <FavoriteIcon
                    onClick={(e) => {
                      setActionItemIndex(index);
                      dispatch(
                        addFavoriteSongRequested({
                          user_id: user.user?.id || "",
                          song_id: song.id,
                        })
                      );
                    }}
                  />
                )}

                <div
                  style={{
                    minWidth: "5vw",
                    display: "flex",
                    gap: "1vw",
                  }}
                >
                  <SongDuration>{formatTime(song.duration || 0)} </SongDuration>
                  {user.user.id === song.customer && (
                    <div
                      style={{
                        position: "relative",
                      }}
                    >
                      <VerticalDots
                        onClick={() => {
                          setPopUpIndex(index);
                        }}
                      />

                      {index === popUpIndex && (
                        <PopUpContainer className="pop">
                          <CloseButton
                            style={{ top: "0", right: "0", color: "black" }}
                            onClick={() => setPopUpIndex(-1)}
                          />
                          <DeleteButton onClick={() => onDelete(song)}>
                            Delete
                          </DeleteButton>
                          <UpdateButton onClick={() => onUpdate(song)}>
                            Update
                          </UpdateButton>
                        </PopUpContainer>
                      )}
                    </div>
                  )}
                </div>
              </SongActions>
            </SongContainer>
          ))
        )}
      </ScrollBar>
    </div>
  );
}

export default MusicTable;
