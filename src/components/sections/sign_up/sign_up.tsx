import { useFormik } from "formik";
import { SignUpContainer, FormError } from "./components.style";
import { SIGN_UP } from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import {
  FormContainer,
  Button,
  Description,
  DescriptionText,
  Form,
  FormGroup,
  Input,
  Label,
} from "../../utils/form_field_elements.style";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { signUpSchema } from "../../../schema/user-auth/auth-schema";
import { signUpRequest } from "../../../store/user/userSlice";
import { UnderlinedTitle } from "../../utils/titles";
import { SmallSpinner } from "../spinner/spinner";
import { InputField } from "../../utils/animate-input-field";
import { ModalTitle } from "../login/components.style";

const SignUpPage = () => {
  const user = useAppSelector((state) => state.user);
  //If the user does not want to sign up just return noting
  const dispatch = useAppDispatch();

  const formHandler = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      gender: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values, _) => {
      dispatch(signUpRequest(values));
    },
  });

  if (user.minorTask !== SIGN_UP) return;

  return (
    <Modal>
      <SignUpContainer>
        <Description>
          <ModalTitle>Join Us!</ModalTitle>
          <DescriptionText>
            Welcome to MyMusic! Sign up now to explore our vast collection of
            music and connect with other music enthusiasts from around the
            world.
          </DescriptionText>
        </Description>
        <FormContainer>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              formHandler.handleSubmit();
            }}
          >
            <FormGroup>
              <InputField>
                <input
                  required
                  placeholder=""
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formHandler.values.fullName}
                  onChange={formHandler.handleChange}
                />
                <label htmlFor="fullName">Full Name</label>
              </InputField>
              <FormError>
                {formHandler.touched.fullName && formHandler.errors.fullName ? (
                  <div>{formHandler.errors.fullName}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  required
                  placeholder=""
                  type="text"
                  id="age"
                  name="gender"
                  value={formHandler.values.gender}
                  onChange={formHandler.handleChange}
                />
                <label htmlFor="gender">Gender</label>
              </InputField>
              <FormError>
                {formHandler.touched.gender && formHandler.errors.gender ? (
                  <div>{formHandler.errors.gender}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  required
                  placeholder=""
                  id="email"
                  type="email"
                  name="email"
                  value={formHandler.values.email}
                  onChange={formHandler.handleChange}
                />
                <label htmlFor="email">Email</label>
              </InputField>
              <FormError>
                {formHandler.touched.email && formHandler.errors.email ? (
                  <div>{formHandler.errors.email}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  required
                  placeholder=""
                  type="password"
                  id="password"
                  name="password"
                  value={formHandler.values.password}
                  onChange={formHandler.handleChange}
                />
                <label htmlFor="password">Password</label>
              </InputField>
              <FormError>
                {formHandler.touched.password && formHandler.errors.password ? (
                  <div>{formHandler.errors.password}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  required
                  placeholder=""
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={formHandler.values.confirm_password}
                  onChange={formHandler.handleChange}
                />
                <label htmlFor="confirm_password">Confirm Password</label>
              </InputField>
              <FormError>
                {formHandler.touched.confirm_password &&
                formHandler.errors.confirm_password ? (
                  <div>{formHandler.errors.confirm_password}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>

            <Button type="submit" disabled={user.loading}>
              {user.loading ? <SmallSpinner /> : "Submit"}
            </Button>
          </Form>
        </FormContainer>
      </SignUpContainer>
    </Modal>
  );
};

export default SignUpPage;
