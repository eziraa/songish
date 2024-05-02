import {
  Button,
  Description,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Title,
} from "../../utils/form_field_elements.style";
import Modal from "../modal/modal";
import { AddPlaylistContainer } from "./components.style";

const PlaylistForm = () => {
  return (
    <Modal>
      <AddPlaylistContainer>
        <Description>
          <Title>{"Create Your Playlist"}</Title>
          <DescriptionText>
            Add your music local music and listen it on cool website
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Playlist Name </Label>
              <Input type="text" id="name" name="name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input type="text" id="description" name="description" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="image">Upload Image</Label>
              <Input type="file" id="image" name="image" />
            </FormGroup>
            <Button type="submit">Add</Button>
          </Form>
        </FormContainer>
      </AddPlaylistContainer>
    </Modal>
  );
};

export default PlaylistForm;
