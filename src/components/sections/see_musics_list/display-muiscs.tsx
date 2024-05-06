import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  DeleteButton,
  FavoriteIcon,
  FavoritedIcon,
  MusicIcon,
  PlayPause,
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
  setMinorTask,
} from "../../../store/user/userSlice";
import {
  ADD_SONG_TO_PLAYLIST,
  SEARCH_SONG_FROM_ALL,
  SEE_ALL_SONGS,
  SEE_PLAYLIST_SONGS,
  UPDATE_SONG,
} from "../../../config/constants/user-current-task";
import { Button } from "../../utils/form_field_elements.style";
import {
  addSongToPlaylistRequested,
  removeSongFromPlaylistRequested,
} from "../../../store/playlist/playlistSlice";
import { ClipLoader } from "react-spinners";

function MusicTable() {
  const songs = useAppSelector((state) => state.songs);
  const user = useAppSelector((state) => state.user);
  const playlists = useAppSelector((state) => state.playlists);

  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);
  const dispatch = useAppDispatch();
  const [actionItemIndex, setActionItemIndex] = useState(-1);
  const [popUpIndex, setPopUpIndex] = useState(-1);

  useEffect(() => {
    if (user.majorTask === SEE_ALL_SONGS) {
      setSongList(songs.songs);
      dispatch(loadMyFavoriteSongsRequested({ user_id: user.user.id }));
    } else if (user.majorTask === ADD_SONG_TO_PLAYLIST)
      setSongList(songs.songs);
    else if (user.majorTask === SEE_PLAYLIST_SONGS)
      setSongList(playlists.songs);
  }, [songs.songs, user.user, playlists.songs, user.majorTask]);

  useEffect(() => {}, []);
  const onDelete = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(deleteSongRequest(Number(song.id)));
    setActionItemIndex(-1);
  };
  const onUpdate = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(setMinorTask(UPDATE_SONG));
    setActionItemIndex(-1);
  };
  const onSelect = (song: SongResponse) => {
    dispatch(
      addSongToPlaylistRequested({
        playlist_id: playlists.currentPlaylist?.id || "",
        song_id: song.id,
      })
    );
  };
  const addToFavorite = async (song: SongResponse) => {
    await dispatch(
      addFavoriteSongRequested({
        user_id: user.user?.id || "",
        song_id: song.id,
      })
    );
    await dispatch(loadMyFavoriteSongsRequested({ user_id: user.user.id }));
  };
  if (
    ![SEE_ALL_SONGS, SEE_PLAYLIST_SONGS, ADD_SONG_TO_PLAYLIST].includes(
      user.majorTask || ""
    )
  )
    return;
  if (songs.loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
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
                <PlayPause
                  onClick={() => {
                    dispatch(
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
                    }, 1000);
                  }}
                />
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
                {user.isOnAction && index == actionItemIndex ? (
                  <ClipLoader
                    color="#4A90E2"
                    loading={user.isOnAction}
                    size={20}
                  />
                ) : user.favorite_songs.find(
                    (item, index) => song.id === item.id
                  ) ? (
                  <FavoritedIcon onClick={() => {}} />
                ) : (
                  <FavoriteIcon
                    onClick={() => {
                      setActionItemIndex(index);
                      addToFavorite(song);
                    }}
                  />
                )}

                <SongDuration>{formatTime(song.duration || 0)} </SongDuration>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <VerticalDots onClick={() => setPopUpIndex(index)}>
                    {index === actionItemIndex && (
                      <PopUpContainer>
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
                  </VerticalDots>
                </div>
              </SongActions>
            </SongContainer>
          ))
        )}
      </ScrollBar>
    </>
  );
}

export default MusicTable;
