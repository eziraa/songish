import { all } from "redux-saga/effects";
import { watchSetNotification } from "../store/notification/notificationSaga";
import {
  watchLoadPlaylists,
  watchAddPlaylist,
} from "../store/playlist/playlistSaga";
import {
  watchLoadSongs,
  watchAddSong,
  watchEditSong,
  watchDeleteSong,
} from "../store/song/songSaga";
import { watchLogin, watchSignup } from "../store/user/userSaga";

export function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignup(),
    watchLoadSongs(),
    watchAddSong(),
    watchEditSong(),
    watchDeleteSong(),
    watchLoadPlaylists(),
    watchAddPlaylist(),
    watchSetNotification(),
  ]);
}
