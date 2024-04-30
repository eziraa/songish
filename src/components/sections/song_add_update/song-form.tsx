import {
  Button,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "../../utils/form_field_elements.style";
import { Description, Title } from "../about/components.style";
import Modal from "../modal/modal";
import { AddSongContainer } from "./components.style";

const SongForm = () => {
  return (
    <Modal>
      <AddSongContainer>
        <Description>
          <Title>Add Yours</Title>
          <DescriptionText>
            Add your playlist local music and listen it on cool website"
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form>
            <FormGroup>
              <Label htmlFor="title">Title </Label>
              <Input type="text" id="title" name="title" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="artist">Artist</Label>
              <Input type="text" id="artist" name="artist" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="album">Album (Optional)</Label>
              <Input type="text" id="album" name="album" />
            </FormGroup>
            <Input type="hidden" id="duration" name="duration" />
            <FormGroup>
              <Label htmlFor="age">Release date (Optional) </Label>
              <Input type="date" id="release_date" name="release_date" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="song_file">Audio</Label>
              <Input type="file" id="song_file" name="song_file" />
            </FormGroup>
            <Button type="submit">Add</Button>
          </Form>
        </FormContainer>
      </AddSongContainer>
    </Modal>
  );
};

export default SongForm;
