import axios from "axios";
import {
  AddFavoriteSongsParams,
  GetMyFavoriteParams,
  LoginParameters,
  SignUpParameters,
} from "../typo/user/parameters";
import { UserResponse } from "../typo/user/response";
import { api } from "../config/api/api";
import { SongResponse } from "../typo/songs/response";

const signUp = async (values: SignUpParameters) => {
  const user = await axios
    .post<UserResponse>(api + "/song/user/register", values)
    .then((res) => res.data);
  return user;
};

const login = async ({ email, password }: LoginParameters) => {
  const user = await axios
    .post<UserResponse>(api + "/song/user/login", { email, password })
    .then((res) => res.data);
  return user;
};
const addFavoriteSongs = async (params: AddFavoriteSongsParams) => {
  const response = await axios
    .post<SongResponse>(
      api + "/song/user/" + params.user_id + "/add_favorite/" + params.song_id
    )
    .then((res) => res.data);
  return response;
};
const getMyFavoriteSongs = async (params: GetMyFavoriteParams) => {
  const songs = await axios
    .get<SongResponse[]>(api + "/song/user/" + params.user_id + "/songs/")
    .then((res) => res.data);
  return songs;
};
const removeSongFromMyFavorite = async (params: AddFavoriteSongsParams) => {
  const song = await axios
    .delete<SongResponse>(
      api + "/song/songs/" + params.user_id + "/remove_song/" + params.song_id
    )
    .then((res) => res.data);
  return song;
};
const getMySongs = async (params: GetMyFavoriteParams) => {
  const songs = await axios
    .get<SongResponse[]>(api + "/song/user/" + params.user_id + "/my-songs/")
    .then((res) => res.data);
  return songs;
};
const UserAPI = {
  signUp,
  login,
  addFavoriteSongs,
  getMyFavoriteSongs,
  removeSongFromMyFavorite,
  getMySongs,
};

export default UserAPI;
