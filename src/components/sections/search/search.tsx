import { SearchIcon } from "../../utils/icons/button-like-icon";
import {
  SearchContainer,
  SearchField,
  SearchForm,
  Select,
} from "./components.style";

const SearchComponent = () => {
  return (
    <SearchForm>
      <SearchContainer>
        <SearchField type="text" placeholder={"Search want you want"} />
        <SearchIcon />
      </SearchContainer>
      <label>
        Search by:
        <Select>
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
        </Select>
      </label>
    </SearchForm>
  );
};

export default SearchComponent;
