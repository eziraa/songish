import { useState } from "react";
import {
  SEARCH_SONG_FROM_ALL,
  SEARCH_SONG_FROM_PLAYLIST,
  SEARCH_SONG_FROM_YOUR_SONGS,
  SEE_MY_SONGS,
  SEE_PLAYLIST_SONGS,
} from "../../../config/constants/user-current-task";
import { setQuerySet } from "../../../store/song/songSlice";
import { setMajorTask } from "../../../store/user/userSlice";
import { SongResponse } from "../../../typo/songs/response";
import { useAppSelector, useAppDispatch } from "../../../utils/customHook";
import { SearchIcon } from "../../utils/icons/button-like-icon";
import {
  Label,
  SearchContainer,
  SearchField,
  SearchForm,
  Select,
} from "./components.style";
const SearchComponent = () => {
  const songs = useAppSelector((state) => state.songs);
  const user = useAppSelector((state) => state.user);
  const playlists = useAppSelector((state) => state.playlists);
  const dispatch = useAppDispatch();
  const [searchField, setSearchField] = useState("title");

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value.toLowerCase();

    let song_list =
      user.majorTask === SEARCH_SONG_FROM_PLAYLIST
        ? playlists.songs
        : user.majorTask === SEARCH_SONG_FROM_YOUR_SONGS
        ? user.user.my_songs
        : songs.songs;
    dispatch(
      setQuerySet(
        song_list.filter((song: SongResponse) => {
          if (value === "") return true;
          if (searchField === "title")
            return song.title.toLowerCase().includes(value);
          if (searchField === "album" && song.album)
            return song.album.includes(value);
          if (searchField === "artist")
            return song.artist.toLowerCase().includes(value);
        })
      )
    );
  };

  return (
    <SearchForm>
      <SearchContainer>
        <SearchField
          type="text"
          placeholder={"Search want you want"}
          onFocus={() => {
            dispatch(
              setQuerySet(
                user.majorTask === SEE_PLAYLIST_SONGS
                  ? playlists.songs
                  : user.majorTask === SEE_MY_SONGS
                  ? user.user.my_songs
                  : songs.songs
              )
            );
            dispatch(
              setMajorTask(
                user.majorTask === SEE_PLAYLIST_SONGS
                  ? SEARCH_SONG_FROM_PLAYLIST
                  : user.majorTask === SEE_MY_SONGS
                  ? SEARCH_SONG_FROM_YOUR_SONGS
                  : SEARCH_SONG_FROM_ALL
              )
            );
          }}
          onChange={handleSearchQueryChange}
        />
        <SearchIcon />
      </SearchContainer>
      <Label>
        Search by:
        <Select
          value={searchField}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSearchField(e.target.value)
          }
        >
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
        </Select>
      </Label>
    </SearchForm>
  );
};

export default SearchComponent;
