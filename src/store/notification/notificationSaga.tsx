import { takeEvery, put, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { hideNotification, setNotification } from "./notificationSlice";
import { NotificationState } from "../../typo/notification/interface/state";

function* handleSetNotification(action: PayloadAction<NotificationState>) {
  yield delay(action.payload.duration * 1000);
  yield put(
    hideNotification({
      color: "",
      status: false,
      title: "",
      desc: "",
      duration: 0,
    })
  );
}

export function* watchSetNotification() {
  yield takeEvery(setNotification.type, handleSetNotification);
}
