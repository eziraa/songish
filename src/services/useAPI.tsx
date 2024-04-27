import axios from "axios";
import { SignUpParameters } from "../typo/user/parameters";
import { UserResponse } from "../typo/user/response";

const signUp = async (values: SignUpParameters) => {
  const user = await axios
    .post<UserResponse>("api" + "/song/user/register", values)
    .then((res) => res.data);
  return user;
};

const UserAPI = {
  signUp,
};

export default UserAPI;
