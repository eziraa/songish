import axios from "axios";
import { SongResponse } from "../typo/songs/response";
import { AddSongParams, EditSongParams } from "../typo/songs/parameters";
import { api } from "./api";

const loadSongs = async () => {
  const songs = await axios
    .get<SongResponse[]>("api" + "/song/get-songs/", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
  return songs;
};

const addSong = async (params: AddSongParams) => {
  const newSong = await axios
    .post<SongResponse>(api + "/song/songs/", params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
  return newSong;
};
const editSong = async (params: EditSongParams) => {
  // const { token, songID, song } = params;
  const editedSong = await axios
    .put<SongResponse>(api + "/song/single-song/", params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
  return editedSong;
};
const SongsAPI = {
  loadSongs,
  addSong,
  editSong,
};
export default SongsAPI;
