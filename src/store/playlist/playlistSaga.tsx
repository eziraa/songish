import { PayloadAction } from "@reduxjs/toolkit";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import PlaylistsAPI from "../../services/playlistAPI";
import {
  AddPlaylistParams,
  AddSongToPlaylistParams,
} from "../../typo/playlist/parameters";
import { setNotification } from "../notification/notificationSlice";
import { loadPlaylistsDone, setMinorTask } from "../user/userSlice";
import {
  addPlaylistDone,
  addSongToPlaylistDone,
  loadingFinished,
} from "./playlistSlice";

function* AddPlaylist(action: PayloadAction<AddPlaylistParams>) {
  try {
    const newPlaylist: SagaReturnType<typeof PlaylistsAPI.addPlaylist> =
      yield call(PlaylistsAPI.addPlaylist, action.payload);
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Adding Playlist",
        desc: "The playlist successfully added",
        duration: 3,
      })
    );
    yield put(setMinorTask(undefined));
    yield put(addPlaylistDone(newPlaylist));
  } catch (error) {
    setNotification({
      color: "red",
      status: true,
      title: "Adding Playlist",
      desc: "The playlist was not added successfully",
      duration: 3,
    });
  }
}

export function* watchAddPlaylist() {
  yield takeEvery("playlist/addPlaylistRequested", AddPlaylist);
}

function* LoadPlaylists(action: PayloadAction<string>) {
  try {
    const playlists: SagaReturnType<typeof PlaylistsAPI.loadPlaylists> =
      yield call(PlaylistsAPI.loadPlaylists, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Loading Playlist",
        desc: "The playlists successfully loaded",
        duration: 3,
      })
    );
    yield put(loadingFinished());
    yield put(loadPlaylistsDone(playlists));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading Playlist",
        desc: "Can not load the playlists from the database",
        duration: 3,
      })
    );
  }
}
export function* watchLoadPlaylists() {
  yield takeEvery("playlist/loadPlaylistsRequested", LoadPlaylists);
}

function* addSongToPlaylist(action: PayloadAction<AddSongToPlaylistParams>) {
  try {
    const songs: SagaReturnType<typeof PlaylistsAPI.addSongToPlayList> =
      yield call(PlaylistsAPI.addSongToPlayList, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Adding song to Playlist",
        desc: "The song successfully added to the playlist",
        duration: 3,
      })
    );
    yield put(addSongToPlaylistDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Adding  song to Playlist",
        desc: "Cannot add song to Playlist",
        duration: 3,
      })
    );
  }
}

export function* watchAddSongToPlaylist() {
  yield takeEvery("playlist/addSongToPlaylistRequested", addSongToPlaylist);
}