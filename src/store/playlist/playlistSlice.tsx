import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlaylistStateType } from "../../typo/playlist/state";
import {
  AddPlaylistParams,
  AddSongToPlaylistParams,
  GetPlaylistSongsParams,
} from "../../typo/playlist/parameters";
import { PlaylistResponse } from "../../typo/playlist/response";
import { SongResponse } from "../../typo/songs/response";

const initialPlaylistState: PlaylistStateType = {
  deleting: false,
  loading: false,
  adding: false,
  removing: false,
  playlists: [],
  query_set: [],
  songs: [],
};

const PlaylistSlice = createSlice({
  name: "playlist",
  initialState: initialPlaylistState,
  reducers: {
    addPlaylistRequested: (state, _: PayloadAction<AddPlaylistParams>) => {
      state.adding = true;
    },
    addPlaylistDone(state, action: PayloadAction<PlaylistResponse>) {
      state.playlists.push(action.payload);
      state.adding = false;
    },
    loadPlaylistsRequested: (state, _: PayloadAction<string>) => {
      state.loading = true;
      state.playlists = [];
    },
    loadPlaylistSongsRequested: (
      state,
      _: PayloadAction<GetPlaylistSongsParams>
    ) => {
      state.loading = true;
      state.songs = [];
    },
    loadPlaylistSongsDone: (state, action: PayloadAction<SongResponse[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    loadPlaylistsDone: (state, action: PayloadAction<PlaylistResponse[]>) => {
      state.playlists = action.payload;
      state.loading = false;
    },
    addSongToPlaylistRequested: (
      state,
      _: PayloadAction<AddSongToPlaylistParams>
    ) => {
      state.loading = true;
      state.songs = [];
    },
    addSongToPlaylistDone: (state, action: PayloadAction<SongResponse>) => {
      state.loading = false;
      state.songs.push(action.payload);
    },
    setCurrentPlaylist: (
      state,
      actions: PayloadAction<PlaylistResponse | undefined>
    ) => {
      state.currentPlaylist = actions.payload;
    },
    removeSongFromPlaylistRequested: (
      state,
      _: PayloadAction<AddSongToPlaylistParams>
    ) => {
      state.removing = true;
    },

    removeSongFromPlaylistDone: (
      state,
      action: PayloadAction<SongResponse>
    ) => {
      state.removing = false;
      state.songs = state.songs.filter((song) => song.id !== action.payload.id);
    },
    deletePlaylistRequest: (state, _: PayloadAction<number>) => {
      state.deleting = true;
    },
    deletePlaylistDone: (state, _: PayloadAction<PlaylistResponse>) => {
      state.deleting = false;
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id != state.currentPlaylist?.id
      );
      state.currentPlaylist = undefined;
    },
    exitPlaylist: (state) => {
      state.currentPlaylist = undefined;
      state.songs = [];
      state.query_set = [];
      state.adding = false;
      state.removing = false;
      state.deleting = false;
      state.loading = false;
      state.query_set = [];
    },
  },
});

export const {
  addPlaylistRequested,
  addPlaylistDone,
  loadPlaylistsRequested,
  loadPlaylistSongsDone,
  loadPlaylistsDone,
  deletePlaylistRequest,
  deletePlaylistDone,
  addSongToPlaylistRequested,
  addSongToPlaylistDone,
  setCurrentPlaylist,
  loadPlaylistSongsRequested,
  removeSongFromPlaylistDone,
  removeSongFromPlaylistRequested,
  exitPlaylist,
} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
