import { SongResponse } from "./response";

export interface LoadSongsParameters {
  token: string;
  playlistID: string;
}
export interface AddSongParams {
  title?: string;
  album?: string;
  artist?: string;
  duration?: number;
  song_file?: any;
  release_date?: string;
  customer_id?: string;
}
export interface EditSongParams extends Omit<AddSongParams, "playlist_id"> {
  id?: string;
}

export interface DeleteSongParams extends AddSongParams {
  id: string;
  callback?: () => void;
}

export interface PlayingParams {
  song: SongResponse | undefined;
  song_list: SongResponse[];
}
