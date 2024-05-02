import { useFormik } from "formik";
import { CreatingPlaylistSchema } from "../../../schema/playlist-schema/playlist";
import { useAppSelector } from "../../../utils/customHook";
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
import { CREATE_PLAYLIST } from "../../../config/constants/user-current-task";
import { FormError } from "../sign_up/components.style";

const PlaylistForm = () => {
  const user = useAppSelector((state) => state.user);
  const initialValues = {
    name: "",
    description: "",
    image: undefined,
    customer_id: user.user.id,
  };
  const formHandler = useFormik({
    initialValues,
    validationSchema: CreatingPlaylistSchema,
    onSubmit: (values, actions) => {},
  });

  if (user.minorTask !== CREATE_PLAYLIST) return;
  return (
    <Modal>
      <AddPlaylistContainer>
        <Description>
          <Title>{"Create Your Playlist"}</Title>
          <DescriptionText>
            Create your own playlist and add songs to it
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Playlist Name </Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={formHandler.handleChange}
                value={formHandler.values.name}
              />
              <FormError>
                {formHandler.touched.name && formHandler.errors.name ? (
                  <div>{formHandler.errors.name}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                id="description"
                name="description"
                onChange={formHandler.handleChange}
                value={formHandler.values.description}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="image">Upload Image</Label>
              <Input
                type="file"
                id="image"
                name="image"
                onChange={async (event) => {
                  formHandler.setFieldValue(
                    "image",
                    event.currentTarget.files && event.currentTarget.files[0]
                  );
                }}
              />
              <FormError>
                {formHandler.touched.image && <>{formHandler.errors.image}</>}
              </FormError>{" "}
            </FormGroup>
            <Button type="submit">
              {" "}
              {user.minorTask === CREATE_PLAYLIST ? "Add" : "Update"}{" "}
            </Button>
          </Form>
        </FormContainer>
      </AddPlaylistContainer>
    </Modal>
  );
};

export default PlaylistForm;
