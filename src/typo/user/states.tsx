import { SongResponse } from "../songs/response";
import { UserResponse } from "./response";

export interface UserStateType {
  loading: boolean;
  user: UserResponse;
  isOnAction: boolean;
  isLogin: boolean;
  favorite_songs: SongResponse[];
  majorTask: string | undefined;
  minorTask?: string | undefined;
}
