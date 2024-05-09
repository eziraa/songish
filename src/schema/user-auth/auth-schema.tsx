import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Please, correct email"),
  password: Yup.string()
    .required("Please, Enter correct  password")
    .min(6, "Password should be at least 6 chars."),
});
export const signUpSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});
