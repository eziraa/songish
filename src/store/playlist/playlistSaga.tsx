import { PayloadAction } from "@reduxjs/toolkit";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import PlaylistsAPI from "../../services/playlistAPI";
import {
  AddPlaylistParams,
  AddSongToPlaylistParams,
  GetPlaylistSongsParams,
} from "../../typo/playlist/parameters";
import { setNotification } from "../notification/notificationSlice";
import { setMinorTask } from "../user/userSlice";
import {
  addPlaylistDone,
  addSongToPlaylistDone,
  deletePlaylistDone,
  loadPlaylistSongsDone,
  loadPlaylistsDone,
  removeSongFromPlaylistDone,
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
    yield put(loadPlaylistsDone(playlists));

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Loading Playlist",
        desc: "The playlists successfully loaded",
        duration: 3,
      })
    );
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading Playlist",
        desc: "Can not load the playlists",
        duration: 3,
      })
    );
  }
}
export function* watchLoadPlaylists() {
  yield takeEvery("playlist/loadPlaylistsRequested", LoadPlaylists);
}

function* DeletePlaylist(action: PayloadAction<number>) {
  try {
    const deletedPlaylist: SagaReturnType<typeof PlaylistsAPI.deletePlaylist> =
      yield call(PlaylistsAPI.deletePlaylist, action.payload);
    yield put(setMinorTask(undefined));
    yield put(deletePlaylistDone(deletedPlaylist));
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Deleting Playlist",
        desc: "The playlist successfully deleted",
        duration: 3,
      })
    );
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Deleting Playlist",
        desc: "The playlist not  deleted",
        duration: 3,
      })
    );
  }
}

export function* watchDeletePlaylist() {
  yield takeEvery("playlist/deletePlaylistRequest", DeletePlaylist);
}

function* addSongToPlaylist(action: PayloadAction<AddSongToPlaylistParams>) {
  try {
    console.table(action.payload);
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

function* LoadPlaylistSongs(action: PayloadAction<GetPlaylistSongsParams>) {
  try {
    const songs: SagaReturnType<typeof PlaylistsAPI.getPlaylistSongs> =
      yield call(PlaylistsAPI.getPlaylistSongs, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Loading Playlist songs",
        desc: "The playlist songs successfully loaded",
        duration: 3,
      })
    );
    yield put(loadPlaylistSongsDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading Playlist songs",
        desc: "Can not load the playlists song",
        duration: 3,
      })
    );
  }
}

export function* watchLoadPlaylistSongs() {
  yield takeEvery("playlist/loadPlaylistSongsRequested", LoadPlaylistSongs);
}

function* removeSongFromPlaylist(
  action: PayloadAction<AddSongToPlaylistParams>
) {
  try {
    const songs: SagaReturnType<typeof PlaylistsAPI.removeSongFromPlayList> =
      yield call(PlaylistsAPI.removeSongFromPlayList, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Removing song from Playlist",
        desc: "The song successfully  removed  from playlist",
        duration: 3,
      })
    );
    yield put(removeSongFromPlaylistDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Removing  song from Playlist",
        desc: "Cannot remove song from Playlist",
        duration: 3,
      })
    );
  }
}

export function* watchRemoveSongFromPlaylist() {
  yield takeEvery(
    "playlist/removeSongFromPlaylistRequested",
    removeSongFromPlaylist
  );
}
