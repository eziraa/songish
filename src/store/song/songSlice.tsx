import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SongStateType } from "../../typo/songs/state";
import { SongResponse } from "../../typo/songs/response";

const InitialSongState: SongStateType = {
  deleting: false,
  loading: false,
  songs: [],
  query_set: [],
  current_song_for_action: undefined,
  current_song_to_play: undefined,
  playing_music_list: [],
};

const SongSlice = createSlice({
  name: "song",
  initialState: InitialSongState,
  reducers: {
    loadSongsRequested: (state) => {
      state.loading = true;
      state.songs = [];
    },
    loadSongsDone: (state, actions: PayloadAction<SongResponse[]>) => {
      state.songs = actions.payload;
      state.loading = false;
    },
  },
});

export const { loadSongsRequested, loadSongsDone } = SongSlice.actions;
export default SongSlice.reducer;
