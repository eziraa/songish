import axios from "axios";
import {
  AddFavoriteSongsParams,
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
const UserAPI = {
  signUp,
  login,
};

export default UserAPI;
