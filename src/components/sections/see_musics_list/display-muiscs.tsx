import {
  SongContainer,
  SongInfoContainer,
  SongTitle,
  SongInfo,
  SongArtist,
  SongAlbum,
  SongDuration,
  SongMetaData,
  MusicIcon,
  PlayPause,
  SongActions,
  SongHeader,
  SongsNotFound,
} from "./components.style";
import { css } from "@emotion/react";
import { Title } from "../../utils/form_field_elements.style";

const SongsListTitle = css`
  text-align: left;
  width: 90%;
  transform: skew(-10deg);
`;

function MusicTable() {
  return (
    <>
      <Title css={SongsListTitle}>All songs</Title>
      <SongHeader>
        <SongsNotFound>No songs found </SongsNotFound>
      </SongHeader>

      <SongContainer>
        <SongMetaData>
          <PlayPause />
          <MusicIcon />
          <SongInfoContainer>
            <SongTitle> Song Title</SongTitle>
            <SongInfo>
              <SongArtist> Artist </SongArtist>
              <SongAlbum> Album </SongAlbum>
            </SongInfo>
          </SongInfoContainer>
        </SongMetaData>
        <SongActions>
          <SongDuration>Song duration </SongDuration>
        </SongActions>
      </SongContainer>
    </>
  );
}

export default MusicTable;
