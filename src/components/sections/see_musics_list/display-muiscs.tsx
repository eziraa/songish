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
import { UPDATE_SONG } from "../../../config/constants/user-current-task";

function MusicTable() {
  const songs = useAppSelector((state) => state.songs);
  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);
  const dispatch = useAppDispatch();
  const [popUpIndex, setPopIndex] = useState(-1);

  useEffect(() => {
    setSongList(songs.songs);
  }, [songs.songs]);
  if (songs.loading) {
    return <LoadingSpinner />;
  }

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
