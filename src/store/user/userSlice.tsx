import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateType } from "../../typo/user/states";
import { LoginParameters, SignUpParameters } from "../../typo/user/parameters";
import { UserResponse } from "../../typo/user/response";

const defaultUserResponse = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  favorite_songs: [],
  my_songs: [],
  my_playlists: [],
};

const InitialUserState: UserStateType = {
  loading: false,
  user: defaultUserResponse,
  isLogin: false,
  minorTask: undefined,
  majorTask: undefined,
};

const UserSlice = createSlice({
  name: "user",
  initialState: InitialUserState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginParameters>) => {
      state.loading = true;
    },
    loginDone: (state, action: PayloadAction<UserResponse>) => {
      state.user = action.payload;
      state.loading = false;
      state.minorTask = undefined;
      state.isLogin = true;
    },
    signUpRequest: (state, action: PayloadAction<SignUpParameters>) => {
      state.loading = true;
    },
    setMinorTask: (state, actions: PayloadAction<string | undefined>) => {
      state.minorTask = actions.payload;
    },
  },
});

export const { signUpRequest, setMinorTask } = UserSlice.actions;
export default UserSlice.reducer;
