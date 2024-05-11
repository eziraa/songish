import { useFormik } from "formik";
import { CreatingPlaylistSchema } from "../../../schema/playlist-schema/playlist";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import {
  Button,
  Description,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
} from "../../utils/form_field_elements.style";
import Modal from "../modal/modal";
import { AddPlaylistContainer } from "./components.style";
import { addPlaylistRequested } from "../../../store/playlist/playlistSlice";
import { CREATE_PLAYLIST } from "../../../config/constants/user-current-task";
import { FormError } from "../sign_up/components.style";
import { SmallSpinner } from "../spinner/spinner";
import { InputField } from "../../utils/animate-input-field";
import { ModalTitle } from "../login/components.style";

const PlaylistForm = () => {
  const user = useAppSelector((state) => state.user);
  const playlist = useAppSelector((state) => state.playlists);
  const dispatch = useAppDispatch();
  const initialValues = {
    name: "",
    description: "",
    image: undefined,
    customer_id: user.user.id,
  };
  const formHandler = useFormik({
    initialValues,
    validationSchema: CreatingPlaylistSchema,
    onSubmit: (values, _) => {
      dispatch(addPlaylistRequested({ ...values, customer_id: user.user.id }));
    },
  });

  if (user.minorTask !== CREATE_PLAYLIST) return;
  return (
    <Modal>
      <AddPlaylistContainer>
        <Description>
          <ModalTitle>Create Yours </ModalTitle>
          <DescriptionText>
            Create your own playlist and add songs to it
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="text"
                  id="name"
                  name="name"
                  onChange={formHandler.handleChange}
                  value={formHandler.values.name}
                />
                <label htmlFor="name">Playlist Name </label>
              </InputField>
              <FormError>
                {formHandler.touched.name && formHandler.errors.name ? (
                  <div>{formHandler.errors.name}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="text"
                  id="description"
                  name="description"
                  onChange={formHandler.handleChange}
                  value={formHandler.values.description}
                />
                <label htmlFor="description">Description(Optional)</label>
              </InputField>
            </FormGroup>

            <FormGroup>
              <InputField>
                <input
                  placeholder=""
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
                <label htmlFor="image">Upload Image</label>
              </InputField>
              <FormError>
                {formHandler.touched.image && <>{formHandler.errors.image}</>}
              </FormError>{" "}
            </FormGroup>
            <Button type="submit">
              {" "}
              {playlist.adding ? (
                <SmallSpinner />
              ) : user.minorTask === CREATE_PLAYLIST ? (
                "Add"
              ) : (
                "Update"
              )}{" "}
            </Button>
          </Form>
        </FormContainer>
      </AddPlaylistContainer>
    </Modal>
  );
};

export default PlaylistForm;
