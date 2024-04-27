import axios from "axios";
import { SongResponse } from "../typo/songs/response";

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

const SongsAPI = {
  loadSongs,
};
export default SongsAPI;
