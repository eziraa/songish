import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  DeleteButton,
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
import { setMinorTask } from "../../../store/user/userSlice";
import {
  ADD_SONG_TO_PLAYLIST,
  SEE_ALL_SONGS,
  UPDATE_SONG,
} from "../../../config/constants/user-current-task";
import { Button } from "../../utils/form_field_elements.style";
import { addSongToPlaylistRequested } from "../../../store/playlist/playlistSlice";

function MusicTable() {
  const songs = useAppSelector((state) => state.songs);
  const user = useAppSelector((state) => state.user);
  const playlists = useAppSelector((state) => state.playlists);

  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);
  const dispatch = useAppDispatch();
  const [popUpIndex, setPopIndex] = useState(-1);

  useEffect(() => {
    if (user.majorTask === SEE_ALL_SONGS) setSongList(songs.songs);
    else if (user.majorTask === ADD_SONG_TO_PLAYLIST) setSongList(songs.songs);
  }, [songs.songs, user.user]);

  const onDelete = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(deleteSongRequest(Number(song.id)));
    setPopIndex(-1);
  };
  const onUpdate = (song: SongResponse) => {
    dispatch(setCurrentSongForAction(song));
    dispatch(setMinorTask(UPDATE_SONG));
    setPopIndex(-1);
  };
  const onSelect = (song: SongResponse) => {
    dispatch(
      addSongToPlaylistRequested({
        playlist_id: playlists.currentPlaylist?.id || "",
        song_id: song.id,
      })
    );
  };
  if (![SEE_ALL_SONGS, ADD_SONG_TO_PLAYLIST].includes(user.majorTask || ""))
    return;
  if (songs.loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <SongsListTitle>All songs</SongsListTitle>
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
                    style={{ backgroundColor: "blue" }}
                    onClick={() => onSelect(song)}
                  >
                    SELECT
                  </Button>
                ) : null}
                <SongDuration>{formatTime(song.duration || 0)} </SongDuration>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <VerticalDots
                    onClick={() => setPopIndex(index)}
                  ></VerticalDots>
                  {index === popUpIndex && (
                    <PopUpContainer>
                      <CloseButton
                        style={{ top: "0", right: "0", color: "black" }}
                        onClick={() => setPopIndex(-1)}
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
              </SongActions>
            </SongContainer>
          ))
        )}
      </ScrollBar>
    </>
  );
}

export default MusicTable;
