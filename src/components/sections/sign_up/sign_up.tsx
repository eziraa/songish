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
          <UnderlinedTitle>Join Us!</UnderlinedTitle>
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
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                id="fullName"
                name="fullName"
                value={formHandler.values.fullName}
                onChange={formHandler.handleChange}
              />
              <FormError>
                {formHandler.touched.fullName && formHandler.errors.fullName ? (
                  <div>{formHandler.errors.fullName}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="gender">Gender</Label>
              <Input
                type="text"
                id="age"
                name="gender"
                value={formHandler.values.gender}
                onChange={formHandler.handleChange}
              />
              <FormError>
                {formHandler.touched.gender && formHandler.errors.gender ? (
                  <div>{formHandler.errors.gender}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={formHandler.values.email}
                onChange={formHandler.handleChange}
              />
              <FormError>
                {formHandler.touched.email && formHandler.errors.email ? (
                  <div>{formHandler.errors.email}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formHandler.values.password}
                onChange={formHandler.handleChange}
              />
              <FormError>
                {formHandler.touched.password && formHandler.errors.password ? (
                  <div>{formHandler.errors.password}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formHandler.values.confirm_password}
                onChange={formHandler.handleChange}
              />
              <FormError>
                {formHandler.touched.confirm_password &&
                formHandler.errors.confirm_password ? (
                  <div>{formHandler.errors.confirm_password}</div>
                ) : null}
              </FormError>{" "}
            </FormGroup>

            <Button type="submit"> submit</Button>
          </Form>
        </FormContainer>
      </SignUpContainer>
    </Modal>
  );
};

export default SignUpPage;
