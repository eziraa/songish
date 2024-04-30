import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginPageContainer, LoginFormContainer } from "./components.style";
import { LOGIN } from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import {
  FormGroup,
  Button,
  Form,
  Input,
  Label,
  Title,
} from "../../utils/form_field_elements.style";
import { loginSchema } from "../../../schema/user-auth/auth-schema";
import { loginRequest } from "../../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);

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

  // useEffect(() => {
  //   if (user.user) {
  //     console.log("Logged in");
  //     route("/home/");
  //   }
  // }, [user.user]);
  console.table(user);
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
