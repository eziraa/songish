import { Label } from "../../utils/form_field_elements.style";
import { SearchIcon } from "../../utils/icons/button-like-icon";
import {
  SearchContainer,
  SearchField,
  SearchForm,
  Select,
} from "./components.style";

const SearchComponent = () => {
  return (
    <>
      <SearchContainer>
        <SearchField type="text" placeholder={"Search want you want"} />
        <SearchIcon />
      </SearchContainer>
      <Label>
        Search by:
        <Select>
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="artist">Artist</option>
        </Select>
      </Label>
    </>
  );
};

export default SearchComponent;
