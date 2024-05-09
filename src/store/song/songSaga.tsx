import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import SongsAPI from "../../services/songAPI";
import { setNotification } from "../notification/notificationSlice";
import {
  addSongDone,
  deleteSongDone,
  editSongDone,
  loadSongsDone,
  setCurrentSongForAction,
} from "./songSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AddSongParams, EditSongParams } from "../../typo/songs/parameters";
import { setMinorTask } from "../user/userSlice";

function* LoadSongs() {
  try {
    const songs: SagaReturnType<typeof SongsAPI.loadSongs> = yield call(
      SongsAPI.loadSongs
    );

    // yield put(
    //   setNotification({
    //     color: "green",
    //     status: true,
    //     title: "Loading Song",
    //     desc: "The songs are successfully loaded",
    //     duration: 3,
    //   })
    // );
    yield put(loadSongsDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading Song",
        desc: "Can not load  songs ",
        duration: 3,
      })
    );
  }
}

export function* watchLoadSongs() {
  yield takeEvery("song/loadSongsRequested", LoadSongs);
}

function* AddSong(action: PayloadAction<AddSongParams>) {
  try {
    const newSong: SagaReturnType<typeof SongsAPI.addSong> = yield call(
      SongsAPI.addSong,
      action.payload
    );
    yield put(setMinorTask(undefined));
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Adding Song",
        desc: "The song  added successfully",
        duration: 3,
      })
    );
    yield put(addSongDone(newSong));
  } catch (error) {
    setNotification({
      color: "red",
      status: true,
      title: "Adding Song",
      desc: "The song was not added ",
      duration: 3,
    });
  }
}
export function* watchAddSong() {
  yield takeEvery("song/addSongRequested", AddSong);
}
function* EditSong(action: PayloadAction<EditSongParams>) {
  try {
    const editedSong: SagaReturnType<typeof SongsAPI.editSong> = yield call(
      SongsAPI.editSong,
      action.payload
    );
    yield put(setMinorTask(undefined));
    yield put(setCurrentSongForAction(undefined));
    yield put(editSongDone(editedSong));

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Updating Song",
        desc: "The song successfully updated",
        duration: 3,
      })
    );
  } catch (error) {
    setNotification({
      color: "red",
      status: true,
      title: "Updating Song",
      desc: "Can not update the song ",
      duration: 3,
    });
  }
}

export function* watchEditSong() {
  yield takeEvery("song/editSongRequest", EditSong);
}

function* DeleteSong(action: PayloadAction<number>) {
  try {
    const deletedSong: SagaReturnType<typeof SongsAPI.deleteSong> = yield call(
      SongsAPI.deleteSong,
      action.payload
    );

    yield put(deleteSongDone(deletedSong));
    yield put(setMinorTask(undefined));
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Deleting Song",
        desc: "The song successfully deleted",
        duration: 3,
      })
    );
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Deleting Song",
        desc: "The song not  deleted",
        duration: 3,
      })
    );
  }
}

export function* watchDeleteSong() {
  yield takeEvery("song/deleteSongRequest", DeleteSong);
}

