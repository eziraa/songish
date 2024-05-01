import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { AddingSongSchema } from "../../../schema/song-schema/songs";
import { addSongRequested } from "../../../store/song/songSlice";
import { UPLOAD_SONG } from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import { AddSongContainer } from "./components.style";
import { Description, Title } from "../about/components.style";
import {
  Button,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "../../utils/form_field_elements.style";
import { FormError } from "../sign_up/components.style";
import SongsAPI from "../../../services/songAPI";

const SongForm = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  let isSubmitting = false;

  const formHandler = useFormik({
    initialValues: {
      title: "",
      artist: "",
      album: "",
      release_date: "",
      customer_id: user.user.id,
      duration: 0,
      song_file: undefined,
    },
    validationSchema: AddingSongSchema,
    onSubmit: (values) => {
      isSubmitting = true;
      dispatch(addSongRequested({ ...values, customer_id: user.user.id }));
    },
  });

  if (user.minorTask != UPLOAD_SONG) return;

  return (
    <Modal>
      <AddSongContainer>
        <Description>
          <Title>Add Yours</Title>
          <DescriptionText>
            Add your playlist local music and listen it on cool website
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">Title </Label>
              <Input
                type="text"
                id="title"
                name="title"
                onChange={formHandler.handleChange}
                value={formHandler.values["title"]}
              />
              <FormError>
                {formHandler.touched.title && formHandler.errors.title ? (
                  <div>{formHandler.errors.title}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="artist">Artist</Label>
              <Input
                type="text"
                id="artist"
                name="artist"
                onChange={formHandler.handleChange}
                value={formHandler.values.artist}
              />
              <FormError>
                {formHandler.touched.artist && formHandler.errors.artist ? (
                  <div>{formHandler.errors.artist}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="album">Album (Optional)</Label>
              <Input
                type="text"
                id="album"
                name="album"
                onChange={formHandler.handleChange}
                value={formHandler.values.album}
              />
            </FormGroup>
            <Input
              type="hidden"
              id="duration"
              name="duration"
              value={formHandler.values.duration}
            />
            <FormGroup>
              <Label htmlFor="age">Release date (Optional) </Label>
              <Input
                type="date"
                id="release_date"
                name="release_date"
                onChange={formHandler.handleChange}
                value={formHandler.values.release_date}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="song_file">Audio</Label>
              <Input
                type="file"
                id="song_file"
                name="song_file"
                onChange={async (event) => {
                  formHandler.setFieldValue(
                    "song_file",
                    event.currentTarget.files && event.currentTarget.files[0]
                  );
                  formHandler.setFieldValue(
                    "duration",
                    event.target.files &&
                      (await SongsAPI.getAudioDuration(event.target.files[0]))
                  );
                }}
              />
              <FormError>
                {formHandler.touched.song_file && (
                  <>{formHandler.errors.song_file}</>
                )}
              </FormError>{" "}
            </FormGroup>
            <Button type="submit"> Add</Button>
          </Form>
        </FormContainer>
      </AddSongContainer>
    </Modal>
  );
};

export default SongForm;