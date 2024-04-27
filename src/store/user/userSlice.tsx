import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStateType } from "../../typo/user/states";
import { SignUpParameters } from "../../typo/user/parameters";

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
