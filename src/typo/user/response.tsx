import { PlaylistResponse } from "../playlist/response";
import { SongResponse } from "../songs/response";

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  favorite_songs: SongResponse[];
  my_songs: SongResponse[];
  my_playlists: PlaylistResponse[];
}
