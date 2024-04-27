import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  color: string;
  status: boolean;
  title: string;
  desc: string;
  duration: number;
}

const initialState: NotificationState = {
  color: "",
  status: false,
  title: "",
  desc: "",
  duration: 0,
};

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationState>) => {
      state.color = action.payload.color;
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.duration = action.payload.duration;
    },
    hideNotification: (state, action: PayloadAction<NotificationState>) => {
      state.color = action.payload.color;
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.desc = action.payload.desc;
      state.duration = action.payload.duration;
    },
  },
});

export const { setNotification, hideNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;
