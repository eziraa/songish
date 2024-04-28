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

export interface DeletePlaylistParams extends AddPlaylistParams {
  id: string;
  callback?: () => void;
}
