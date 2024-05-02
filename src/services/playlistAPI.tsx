import axios from "axios";
import {
  AddPlaylistParams,
  AddSongToPlaylistParams,
} from "../typo/playlist/parameters";
import { api } from "./api";
import { PlaylistResponse } from "../typo/playlist/response";
import { SongResponse } from "../typo/songs/response";

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

const PlaylistsAPI = {
  addPlaylist,
  loadPlaylists,
  addSongToPlayList,
};
export default PlaylistsAPI;
