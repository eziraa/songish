import axios from "axios";
import { api } from "../../../config/api/api";
import { PlaylistResponse } from "../../../typo/playlist";
import {
  AddPlaylistParams,
  DeletePlaylistParams,
  EditPlaylistParams,
} from "../interface/parameters";
import { SongResponse } from "../../../typo/song";

const loadPlaylists = async (user_id: string) => {
  const playlists = await axios
    .get<PlaylistResponse[]>(
      api + "/song/playlist/" + user_id + "/my_playlists/",
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data);
  return playlists;
};

const addPlaylist = async (params: AddPlaylistParams) => {
  const newPlaylist = await axios
    .post<PlaylistResponse>(api + "/song/playlist/playlists/", params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
  return newPlaylist;
};

const editPlaylist = async (params: EditPlaylistParams) => {
  // const { token, playlistID, playlist } = params;
  const editedPlaylist = await axios
    .put<PlaylistResponse>(api + "/song/playlist/single-playlist/", params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
  return editedPlaylist;
};



const deletePlaylist = async (playlist_id: number) => {
  const response = await axios.delete<PlaylistResponse>(
    `${api}/song/playlist/${playlist_id}`
  );
  return response.data;
};
export type GetPlaylistSongsParams = {
  playlist_id: string;
};

export type AddSongToPlaylistParams = {
  playlist_id: string;
  song_id: string;
};

const getPlaylistSongs = async (params: GetPlaylistSongsParams) => {
  const songs = await axios
    .get<SongResponse[]>(
      api + "/song/playlist/" + params.playlist_id + "/songs/"
    )
    .then((res) => res.data);
  return songs;
};

const addSongToPlayList = async (params: AddSongToPlaylistParams) => {
  const songs = await axios
    .post<SongResponse[]>(
      api +
        "/song/playlist/" +
        params.playlist_id +
        "/add_song/" +
        params.song_id
    )
    .then((res) => res.data);
  return songs;
};


const removeSongFromPlayList = async (params: AddSongToPlaylistParams) => {
  const songs = await axios
    .delete<SongResponse[]>(
      api +
        "/song/playlist/" +
        params.playlist_id +
        "/remove_song/" +
        params.song_id
    )
    .then((res) => res.data);
  return songs;
};
const PlaylistsAPI = {
  loadPlaylists,
  addPlaylist,
  editPlaylist,
  deletePlaylist,
  getPlaylistSongs,
  addSongToPlayList,
  removeSongFromPlayList,
};
export default PlaylistsAPI;
