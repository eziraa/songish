export interface LoginParameters {
  email: string;
  password: string;
}

export interface SignUpParameters {
  fullName: string;
  email: string;
  gender: string;
  password: string;
  confirm_password: string;
}

export type AddFavoriteSongsParams = {
  user_id: string;
  song_id: string;
};

export type GetMyFavoriteParams = {
  user_id: string;
};