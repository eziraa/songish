import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import SongsAPI from "../../services/songAPI";
import { setNotification } from "../notification/notificationSlice";
import { loadSongsDone } from "./songSlice";

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
