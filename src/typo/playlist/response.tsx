import { SongResponse } from "../songs/response";

export interface PlaylistResponse {
  id: string;
  name: string;
  description?: string;
  user_id: string;
  song: SongResponse[];
  created_at: string;
  image: File;
}
