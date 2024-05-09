import { all } from "redux-saga/effects";
import { watchSetNotification } from "../store/notification/notificationSaga";
import {
  watchLoadPlaylists,
  watchAddPlaylist,
  watchAddSongToPlaylist,
  watchLoadPlaylistSongs,
  watchRemoveSongFromPlaylist,
  watchDeletePlaylist,
} from "../store/playlist/playlistSaga";
import {
  watchLoadSongs,
  watchAddSong,
  watchEditSong,
  watchDeleteSong,
} from "../store/song/songSaga";
import {
  watchAddFavoriteSong,
  watchLoadMyFavoriteSongs,
  watchLoadMySongs,
  watchLogin,
  watchLogoutUser,
  watchRemoveSongFromMyFavorite,
  watchSignup,
} from "../store/user/userSaga";

export function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogoutUser(),
    watchSignup(),
    watchAddFavoriteSong(),
    watchLoadMyFavoriteSongs(),
    watchRemoveSongFromMyFavorite(),
    watchLoadSongs(),
    watchAddSong(),
    watchEditSong(),
    watchDeleteSong(),
    watchLoadPlaylists(),
    watchAddPlaylist(),
    watchDeletePlaylist(),
    watchSetNotification(),
    watchAddSongToPlaylist(),
    watchRemoveSongFromPlaylist(),
    watchLoadPlaylistSongs(),
    watchLoadMySongs(),
  ]);
}
