import * as Yup from "yup";

export const AddingSongSchema = Yup.object().shape({
  title: Yup.string().required("Please, Enter music title"),
  artist: Yup.string().required("Please, enter the artist name"),
  song_file: Yup.mixed()
    .test("required", "A file is required", (value: any) => {
      return value; // 10 MB
    })
    .test("fileSize", "File too large", (value: any) => {
      return value && value.size <= 10485760; // 10 MB
    })
    .test("fileFormat", "Unsupported Format", (value: any) => {
      return (
        value &&
        ["audio/mpeg", "audio/wave", "audio/wav", "audio/mp3"].includes(
          value.type
        )
      );
    }),
});
