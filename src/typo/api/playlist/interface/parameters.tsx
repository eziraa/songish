export interface LoadPlaylistsParameters {
  token: string;
  playlistID: string;
}
export interface AddPlaylistParams {
  name: string;
  description?: string;
  image?: any;
  customer_id: any;
}
export interface EditPlaylistParams extends AddPlaylistParams {
  id?: string;
}

export interface DeletePlaylistParams extends AddPlaylistParams {
  id: string;
  callback?: () => void;
}
