import { PayloadAction } from "@reduxjs/toolkit";
import { SignUpParameters } from "../../typo/user/parameters";
import { SagaReturnType, call, takeEvery } from "redux-saga/effects";
import UserAPI from "../../services/useAPI";

function* SignUp(action: PayloadAction<SignUpParameters>) {
  try {
    let user: SagaReturnType<typeof UserAPI.signUp> = yield call(
      UserAPI.signUp,
      action.payload
    );
  } catch (e) {}
}

export function* watchSignup() {
  yield takeEvery("user/signUpRequest", SignUp);
}
