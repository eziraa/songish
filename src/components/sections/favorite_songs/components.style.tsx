import styled from "styled-components";
import { OutLinedButton } from "../../utils/buttons.style";
import { BtnContainer } from "../see_playlist/components.style";
import { RecentContainer } from "../recent-songs/components.style";

export const Button = styled(OutLinedButton)`
  padding: 10px 20px;
  color: white;
`;

export const FavoriteBtnContainer = styled(BtnContainer)`
  display: flex;
  width: 100%;
  justify-content: start;
  margin-left: 5rem;
  align-items: center;
`;

export const FavoriteContainer = styled(RecentContainer)``;
