import axios from "axios";
import { SongResponse } from "../typo/songs/response";
import { AddSongParams } from "../typo/songs/parameters";

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

const SongsAPI = {
  loadSongs,
  addSong,
};
export default SongsAPI;
