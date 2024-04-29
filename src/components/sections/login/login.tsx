import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPageContainer, LoginFormContainer } from "./components.style";
import { LOGIN } from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import { useFormik, Form } from "formik";
import { loginRequest } from "../../../store/user/userSlice";
import { useAppSelector, useAppDispatch } from "../../../utils/customHook";
import {
  FormGroup,
  Label,
  Input,
  Button,
} from "../../utils/form_field_elements.style";
import { Title } from "../recent-songs/components.style";
import { loginSchema } from "../../../schema/user-auth/auth-schema";

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);

  const route = useNavigate();
  const dispatch = useAppDispatch();
  const formHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      dispatch(loginRequest(values));
    },
  });

  if (user.minorTask !== LOGIN) return;

  return (
    <Modal>
      <LoginPageContainer>
        <LoginFormContainer>
          <Title style={{ color: "black" }}>Login</Title>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="emails"
                placeholder="Enter your email"
                name="email"
                onChange={formHandler.handleChange}
                value={formHandler.values["email"]}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="passwords"
                placeholder="Enter your password"
                name="password"
                onChange={formHandler.handleChange}
                value={formHandler.values["password"]}
              />
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </LoginFormContainer>
      </LoginPageContainer>
    </Modal>
  );
};

export default LoginPage;
