import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SongStateType } from "../../typo/songs/state";
import { SongResponse } from "../../typo/songs/response";
import {
  AddSongParams,
  EditSongParams,
  PlayingParams,
} from "../../typo/songs/parameters";
import { api } from "../../services/api";

const InitialSongState: SongStateType = {
  deleting: false,
  loading: false,
  adding: false,
  songs: [],
  query_set: [],
  current_song_for_action: undefined,
  current_song_to_play: undefined,
  playing_music_list: [],
  current_song: new Audio(),
};

const SongSlice = createSlice({
  name: "song",
  initialState: InitialSongState,
  reducers: {
    addSongRequested: (state, _: PayloadAction<AddSongParams>) => {
      state.adding = true;
    },
    addSongDone(state, action: PayloadAction<SongResponse>) {
      state.songs.push(action.payload);
      state.adding = false;
    },
    editSongRequest: (state, _: PayloadAction<EditSongParams>) => {
      state.adding = true;
    },
    loadSongsRequested: (state) => {
      state.loading = false;
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
    deleteSongRequest: (state, _: PayloadAction<number>) => {
      state.deleting = true;
    },
    deleteSongDone: (state, _: PayloadAction<SongResponse>) => {
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
      state.loading = true;
    },
    setCurrentSongToPlay: (state, actions: PayloadAction<PlayingParams>) => {
      state.current_song_to_play = actions.payload.song;
      state.playing_music_list = actions.payload.song_list;
      state.current_song.pause();
      state.current_song = new Audio(api + actions.payload.song?.song_file);
      state.loading = false;
    },
    changeSong: (state, actions: PayloadAction<SongResponse>) => {
      state.current_song_to_play = actions.payload;
      state.current_song.pause();
      state.current_song = new Audio(api + actions.payload?.song_file);
    },
    setQuerySet: (state, actions: PayloadAction<SongResponse[]>) => {
      state.query_set = actions.payload;
    },
    exitSong: (state) => {
      state.current_song_to_play = undefined;
      state.playing_music_list = [];
      state.current_song_for_action = undefined;
      state.query_set = [];
      state.loading = false;
      state.deleting = false;
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
  deleteSongRequest,
  deleteSongDone,
  setCurrentSongToPlay,
  setQuerySet,
  changeSong,
  exitSong,
} = SongSlice.actions;
export default SongSlice.reducer;
