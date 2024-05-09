import { SongResponse } from "./response";

export interface SongStateType {
  deleting: boolean;
  loading: boolean;
  adding: boolean;
  songs: SongResponse[];
  current_song_for_action?: SongResponse;
  current_song_to_play?: SongResponse;
  query_set: SongResponse[];
  playing_music_list: SongResponse[];
  current_song: any;
}
