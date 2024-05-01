import { useEffect, useState } from "react";
import { useAppSelector } from "../../../utils/customHook";
import { Title } from "../../utils/form_field_elements.style";
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

function MusicTable() {
  const songs = useAppSelector((state) => state.songs);
  const [song_list, setSongList] = useState<SongResponse[]>(songs.songs);

  useEffect(() => {
    setSongList(songs.songs);
    console.table(song_list);
  }, []);
  if (songs.loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SongsListTitle>All songs</SongsListTitle>

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
    </>
  );
}

export default MusicTable;
