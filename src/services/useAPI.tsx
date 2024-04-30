import axios from "axios";
import { LoginParameters, SignUpParameters } from "../typo/user/parameters";
import { UserResponse } from "../typo/user/response";
import { api } from "../config/api/api";

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
const UserAPI = {
  signUp,
  login,
};

export default UserAPI;
