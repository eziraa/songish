import { UserResponse } from "./response";

export interface UserStateType {
  loading: boolean;
  user: UserResponse;
  isOnAction: boolean;
  isLogin: boolean;
  majorTask: string | undefined;
  minorTask?: string | undefined;
}
