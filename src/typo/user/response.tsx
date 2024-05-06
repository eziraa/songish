import { PlaylistResponse } from "../playlist/response";
import { SongResponse } from "../songs/response";

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  my_songs: SongResponse[];
  my_playlists: PlaylistResponse[];
}
