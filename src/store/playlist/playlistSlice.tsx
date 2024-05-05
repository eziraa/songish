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
    loadPlaylistSongsRequested: (
      state,
      action: PayloadAction<GetPlaylistSongsParams>
    ) => {
      state.loading = true;
      state.songs = [];
    },
    loadPlaylistSongsDone: (state, action: PayloadAction<SongResponse[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    loadingFinished: (state) => {
      state.loading = false;
    },
    addSongToPlaylistRequested: (
      state,
      action: PayloadAction<AddSongToPlaylistParams>
    ) => {
      state.loading = true;
      state.songs = [];
    },
    addSongToPlaylistDone: (state, action: PayloadAction<SongResponse[]>) => {
      state.loading = false;
      state.songs = action.payload;
    },
    setCurrentPlaylist: (
      state,
      actions: PayloadAction<PlaylistResponse | undefined>
    ) => {
      state.currentPlaylist = actions.payload;
    },
    removeSongFromPlaylistRequested: (
      state,
      action: PayloadAction<AddSongToPlaylistParams>
    ) => {
      state.loading = true;
    },

    removeSongFromPlaylistDone: (
      state,
      action: PayloadAction<SongResponse[]>
    ) => {
      state.loading = false;
    },
    deletePlaylistRequest: (state, action: PayloadAction<number>) => {
      state.deleting = true;
    },
    deletePlaylistDone: (state, action: PayloadAction<PlaylistResponse>) => {
      state.deleting = false;
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id != state.currentPlaylist?.id
      );
      state.currentPlaylist = undefined;
    },
  },
});

export const {
  addPlaylistRequested,
  addPlaylistDone,
  loadPlaylistsRequested,
  loadPlaylistSongsDone,
  loadingFinished,
  deletePlaylistRequest,
  deletePlaylistDone,
  addSongToPlaylistRequested,
  addSongToPlaylistDone,
  setCurrentPlaylist,
  loadPlaylistSongsRequested,
  removeSongFromPlaylistDone,
  removeSongFromPlaylistRequested,
} = PlaylistSlice.actions;
export default PlaylistSlice.reducer;
