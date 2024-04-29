import { PayloadAction } from "@reduxjs/toolkit";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import PlaylistsAPI from "../../services/playlistAPI";
import { AddPlaylistParams } from "../../typo/playlist/parameters";
import { setNotification } from "../notification/notificationSlice";
import { setMinorTask } from "../user/userSlice";
import { addPlaylistDone } from "./playlistSlice";

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
