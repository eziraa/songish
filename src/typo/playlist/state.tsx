import { SongResponse } from "../songs/response";
import { PlaylistResponse } from "./response";

export interface PlaylistStateType {
  deleting: boolean;
  loading: boolean;
  adding: boolean;
  playlists: PlaylistResponse[];
  currentPlaylist?: PlaylistResponse;
  query_set?: PlaylistResponse[];
  songs: SongResponse[];
}
