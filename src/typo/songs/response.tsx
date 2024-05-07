export interface SongResponse {
  id: string;
  title: string;
  album?: string;
  artist: string;
  duration?: number;
  release_date: string;
  playlist_id?: string;
  customer: string;
  song_file: File | undefined;
  created_at: string;
}
