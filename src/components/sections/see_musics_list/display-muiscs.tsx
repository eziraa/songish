import { useEffect, useState } from "react";
import { useAppSelector } from "../../../utils/customHook";
import {
  MusicIcon,
  PlayPause,
  SongAlbum,
  SongArtist,
  SongContainer,
  SongHeader,
  SongInfo,
  SongInfoContainer,
  SongMetaData,
  SongTitle,
  SongsListTitle,
  SongsNotFound,
} from "./components.style";
import { SongResponse } from "../../../typo/songs/response";
import LoadingSpinner from "../spinner/spinner";
import { ScrollBar } from "../../utils/scrollbar.style";

function MusicTable() {
  const songs = useAppSelector((state) => state.songs);
  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);

  useEffect(() => {
    setSongList(songs.songs);
  }, [songs.songs]);
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
                <PlayPause />
                <MusicIcon />
                <SongInfoContainer>
                  <SongTitle> {song.title} </SongTitle>
                  <SongInfo>
                    <SongArtist> {song.artist} </SongArtist>
                    <SongAlbum> {song.album || "No Album"} </SongAlbum>
                  </SongInfo>
                </SongInfoContainer>
              </SongMetaData>
            </SongContainer>
          ))
        )}
      </ScrollBar>
    </>
  );
}

export default MusicTable;
