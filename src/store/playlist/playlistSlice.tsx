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
    loadPlaylistsRequested: (state, actions: PayloadAction<string>) => {
      state.loading = true;
    },
    loadPlaylistSongsDone: (state, action: PayloadAction<SongResponse[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    loadingFinished: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addPlaylistRequested,
  addPlaylistDone,
  loadPlaylistsRequested,
  loadingFinished,
} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
