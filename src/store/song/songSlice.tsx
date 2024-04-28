import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SongStateType } from "../../typo/songs/state";
import { SongResponse } from "../../typo/songs/response";
import { AddSongParams } from "../../typo/songs/parameters";

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
    addSongRequested: (state, action: PayloadAction<AddSongParams>) => {
      state.loading = true;
    },
    addSongDone(state, action: PayloadAction<SongResponse>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    editSongRequest: (state, action: PayloadAction<EditSongParams>) => {
      state.loading = true;
    },
    loadSongsRequested: (state) => {
      state.loading = true;
      state.songs = [];
    },
    loadSongsDone: (state, actions: PayloadAction<SongResponse[]>) => {
      state.songs = actions.payload;
      state.loading = false;
    },
    editSongDone: (state, action: PayloadAction<SongResponse>) => {
      state.loading = false;
      state.songs = state.songs.map((song) =>
        song.id === action.payload.id ? action.payload : song
      );
    },
    deleteSongRequest: (state, action: PayloadAction<number>) => {
      state.deleting = true;
    },
    deleteSongDone: (state, action: PayloadAction<SongResponse>) => {
      state.deleting = false;
      state.songs = state.songs.filter(
        (song) => song.id != state.current_song_for_action?.id
      );
    },
    setCurrentSongForAction: (
      state,
      actions: PayloadAction<SongResponse | undefined>
    ) => {
      state.current_song_for_action = actions.payload;
    },
  },
});

export const {
  loadSongsRequested,
  loadSongsDone,
  addSongRequested,
  addSongDone,
  editSongRequest,
  editSongDone,
  setCurrentSongForAction,
} = SongSlice.actions;
export default SongSlice.reducer;
