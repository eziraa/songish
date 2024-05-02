import * as Yup from "yup";

export const CreatingPlaylistSchema = Yup.object().shape({
  name: Yup.string().required("Please, Enter Playlist name"),
  image: Yup.mixed()
    .required("Please, Add Playlist image")
    .test("fileSize", "File too large", (value: any) => {
      return value && value.size <= 10485760; // 10 MB
    })
    .test("fileFormat", "Unsupported Format", (value: any) => {
      return (
        value && ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
      );
    }),
});
