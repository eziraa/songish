import { PayloadAction } from "@reduxjs/toolkit";
import {
  AddFavoriteSongsParams,
  GetMyFavoriteParams,
  LoginParameters,
  SignUpParameters,
} from "../../typo/user/parameters";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import UserAPI from "../../services/useAPI";
import { setNotification } from "../notification/notificationSlice";
import {
  addFavoriteSongDone,
  loadMyFavoriteSongsDone,
  loadMySongsDone,
  loginDone,
  removeSongFromMyFavoriteDone,
} from "./userSlice";
function* SignUp(action: PayloadAction<SignUpParameters>) {
  try {
    let user: SagaReturnType<typeof UserAPI.signUp> = yield call(
      UserAPI.signUp,
      action.payload
    );
    yield put(loginDone(user));
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "User sign up in",
        desc: "You are successfully sign up in",
        duration: 3,
      })
    );
  } catch (e) {
    setNotification({
      color: "green",
      status: true,
      title: "User sign up in",
      desc: "Cannot register you",
      duration: 3,
    });
  }
}
export function* watchSignup() {
  yield takeEvery("user/signUpRequest", SignUp);
}

function* Login(action: PayloadAction<LoginParameters>) {
  try {
    let user: SagaReturnType<typeof UserAPI.login> = yield call(
      UserAPI.login,
      action.payload
    );
    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "User login up in",
        desc: "You are successfully logged up in",
        duration: 3,
      })
    );
    yield put(loginDone(user));
  } catch (e) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "User login",
        desc: "Incorrect password or email address",
        duration: 3,
      })
    );
  }
}

export function* watchLogin() {
  yield takeEvery("user/loginRequest", Login);
}

function* addFavoriteSong(action: PayloadAction<AddFavoriteSongsParams>) {
  try {
    const response: SagaReturnType<typeof UserAPI.addFavoriteSongs> =
      yield call(UserAPI.addFavoriteSongs, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Adding favorite song",
        desc: "The song successfully added to your favorite list",
        duration: 3,
      })
    );
    yield put(addFavoriteSongDone(response));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Adding favorite songs",
        desc: "Cannot add this song to the favorite",
        duration: 3,
      })
    );
  }
}

export function* watchAddFavoriteSong() {
  yield takeEvery("user/addFavoriteSongRequested", addFavoriteSong);
}

function* loadMyFavoriteSongs(action: PayloadAction<GetMyFavoriteParams>) {
  try {
    const songs: SagaReturnType<typeof UserAPI.getMyFavoriteSongs> = yield call(
      UserAPI.getMyFavoriteSongs,
      action.payload
    );
    setNotification({
      color: "red",
      status: true,
      title: "Loading your favorite songs",
      desc: "Your favorite songs loaded successfully",
      duration: 3,
    });

    yield put(loadMyFavoriteSongsDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading your favorite songs",
        desc: "Can not load your favorite songs",
        duration: 3,
      })
    );
  }
}

export function* watchLoadMyFavoriteSongs() {
  yield takeEvery("user/loadMyFavoriteSongsRequested", loadMyFavoriteSongs);
}

function* removeSongFromMyFavorite(
  action: PayloadAction<AddFavoriteSongsParams>
) {
  try {
    const songs: SagaReturnType<typeof UserAPI.removeSongFromMyFavorite> =
      yield call(UserAPI.removeSongFromMyFavorite, action.payload);

    yield put(
      setNotification({
        color: "green",
        status: true,
        title: "Removing song from my you favorite",
        desc: "The song successfully  removed  from your favorite",
        duration: 3,
      })
    );
    yield put(removeSongFromMyFavoriteDone(songs));
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

export function* watchRemoveSongFromMyFavorite() {
  yield takeEvery(
    "user/removeSongFromMyFavoriteRequested",
    removeSongFromMyFavorite
  );
}

function* loadMySongs(action: PayloadAction<GetMyFavoriteParams>) {
  try {
    const songs: SagaReturnType<typeof UserAPI.getMySongs> = yield call(
      UserAPI.getMySongs,
      action.payload
    );
    setNotification({
      color: "red",
      status: true,
      title: "Loading your  songs",
      desc: "Your  songs loaded successfully",
      duration: 3,
    });

    yield put(loadMySongsDone(songs));
  } catch (error) {
    yield put(
      setNotification({
        color: "red",
        status: true,
        title: "Loading your  songs",
        desc: "Can not load your  songs",
        duration: 3,
      })
    );
  }
}

export function* watchLoadMySongs() {
  yield takeEvery("user/loadMySongsRequested", loadMySongs);
}
