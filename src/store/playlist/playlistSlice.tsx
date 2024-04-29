import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistStateType } from "../../typo/playlist/state";
import { AddPlaylistParams } from "../../typo/playlist/parameters";
import { PlaylistResponse } from "../../typo/playlist/response";

const initialPlaylistState: PlaylistStateType = {
  deleting: false,
  loading: false,
  playlists: [],
  query_set: [],
  songs: [],
};

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState: initialPlaylistState,
  reducers: {
    addPlaylistRequested: (state, action: PayloadAction<AddPlaylistParams>) => {
      state.loading = true;
    },
    addPlaylistDone(state, action: PayloadAction<PlaylistResponse>) {
      state.playlists.push(action.payload);
      state.loading = false;
    },
  },
});

export const { addPlaylistRequested, addPlaylistDone } = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
