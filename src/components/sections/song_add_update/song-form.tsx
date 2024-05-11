import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { AddingSongSchema } from "../../../schema/song-schema/songs";
import {
  addSongRequested,
  editSongRequest,
} from "../../../store/song/songSlice";
import {
  UPDATE_SONG,
  UPLOAD_SONG,
} from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import { AddSongContainer } from "./components.style";
import { Description } from "../about/components.style";
import {
  Button,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
  Input,
} from "../../utils/form_field_elements.style";
import { FormError } from "../sign_up/components.style";
import SongsAPI from "../../../services/songAPI";
import { SmallSpinner } from "../spinner/spinner";
import { InputField } from "../../utils/animate-input-field";
import { ModalTitle } from "../login/components.style";

const SongForm = () => {
  const user = useAppSelector((state) => state.user);
  const songs = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();

  const formHandler = useFormik({
    initialValues: {
      title: songs.current_song_for_action?.title || "",
      artist: songs.current_song_for_action?.artist || "",
      album: songs.current_song_for_action?.album || "",
      release_date: songs.current_song_for_action?.release_date || "",
      duration: songs.current_song_for_action?.duration || 0,
      song_file: songs.current_song_for_action?.song_file || undefined,
    },
    validationSchema: AddingSongSchema,
    onSubmit: (values) => {
      if (user.minorTask === UPLOAD_SONG) {
        dispatch(addSongRequested({ ...values, customer_id: user.user.id }));
      } else if (user.minorTask === UPDATE_SONG) {
        dispatch(
          editSongRequest({
            ...values,
            customer_id: user.user.id,
            id: songs.current_song_for_action?.id,
          })
        );
      }
    },
    enableReinitialize: user.minorTask === UPDATE_SONG ? true : false, // add this line
  });

  if (![UPDATE_SONG, UPLOAD_SONG].includes(user.minorTask || "")) return;
  return (
    <Modal>
      <AddSongContainer>
        <Description>
          <ModalTitle>
            {user.minorTask === UPLOAD_SONG
              ? "Add Yours"
              : "Update Your musics"}
          </ModalTitle>
          <DescriptionText>
            {user.minorTask === UPLOAD_SONG
              ? "Add your  local music and listen it on cool website"
              : "Update your playlist that you uploaded before"}
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="text"
                  id="title"
                  name="title"
                  onChange={formHandler.handleChange}
                  value={formHandler.values["title"]}
                />
                <label htmlFor="title">Title</label>
              </InputField>
              <FormError>
                {formHandler.touched.title && formHandler.errors.title ? (
                  <div>{formHandler.errors.title}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="text"
                  id="artist"
                  name="artist"
                  onChange={formHandler.handleChange}
                  value={formHandler.values.artist}
                />
                <label htmlFor="artist">Artist</label>
              </InputField>
              <FormError>
                {formHandler.touched.artist && formHandler.errors.artist ? (
                  <div>{formHandler.errors.artist}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="text"
                  id="album"
                  name="album"
                  onChange={formHandler.handleChange}
                  value={formHandler.values.album}
                />
                <label htmlFor="album">Album (Optional)</label>
              </InputField>
            </FormGroup>
            <Input
              type="hidden"
              id="duration"
              name="duration"
              value={formHandler.values.duration}
            />
            <FormGroup>
              <InputField>
                <input
                  placeholder=""
                  type="date"
                  id="release_date"
                  name="release_date"
                  onChange={formHandler.handleChange}
                  value={formHandler.values.release_date}
                />
                <label htmlFor="age">Release date (Optional) </label>
              </InputField>
            </FormGroup>

            <FormGroup>
              <InputField>
                <input
                  placeholder=""
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
                <label htmlFor="song_file">Audio</label>
              </InputField>
              <FormError>
                {formHandler.touched.song_file && (
                  <>{formHandler.errors.song_file}</>
                )}
              </FormError>{" "}
            </FormGroup>
            <Button type="submit" disabled={user.loading}>
              {songs.adding ? (
                <SmallSpinner />
              ) : user.minorTask === UPLOAD_SONG ? (
                "Add"
              ) : (
                "Update"
              )}
            </Button>
          </Form>
        </FormContainer>
      </AddSongContainer>
    </Modal>
  );
};

export default SongForm;
