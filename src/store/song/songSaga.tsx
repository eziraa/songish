import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import SongsAPI from "../../services/songAPI";
import { setNotification } from "../notification/notificationSlice";
import { addSongDone, loadSongsDone } from "./songSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { AddSongParams } from "../../typo/songs/parameters";
import { setMinorTask } from "../user/userSlice";

function* LoadSongs() {
  try {
    const songs: SagaReturnType<typeof SongsAPI.loadSongs> = yield call(
      SongsAPI.loadSongs
    );

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Loading Song",
        desc: "The songs successfully loaded",
        duration: 3,
      })
    );
    yield put(loadSongsDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading Song",
        desc: "Can not load the songs from the database",
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
        desc: "The song successfully added",
        duration: 3,
      })
    );
    yield put(addSongDone(newSong));
  } catch (error) {
    setNotification({
      color: "red",
      status: true,
      title: "Adding Song",
      desc: "The song was not added successfully",
      duration: 3,
    });
  }
}
