import { PayloadAction } from "@reduxjs/toolkit";
import { SignUpParameters } from "../../typo/user/parameters";
import { SagaReturnType, call, put, takeEvery } from "redux-saga/effects";
import UserAPI from "../../services/useAPI";
import { setNotification } from "../notification/notificationSlice";
import { loginDone } from "./userSlice";
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
    if (e instanceof AxiosError) {
      setNotification({
        color: "green",
        status: true,
        title: "User sign up in",
        desc: "Cannot register you",
        duration: 3,
      });
    }
  }
}
export function* watchSignup() {
  yield takeEvery("user/signUpRequest", SignUp);
}

