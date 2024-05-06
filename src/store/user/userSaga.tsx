import { PayloadAction } from "@reduxjs/toolkit";
import {
  AddFavoriteSongsParams,
  LoginParameters,
  SignUpParameters,
} from "../../typo/user/parameters";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import UserAPI from "../../services/useAPI";
import { setNotification } from "../notification/notificationSlice";
import { addFavoriteSongDone, loginDone } from "./userSlice";
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

