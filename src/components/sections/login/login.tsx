import { useFormik } from "formik";
import {
  LoginPageContainer,
  LoginFormContainer,
  ModalTitle,
} from "./components.style";
import { LOGIN } from "../../../config/constants/user-current-task";
import Modal from "../modal/modal";
import { FormGroup, Button, Form } from "../../utils/form_field_elements.style";
import { loginSchema } from "../../../schema/user-auth/auth-schema";
import { loginRequest } from "../../../store/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/customHook";
import { SmallSpinner } from "../spinner/spinner";
import { InputField } from "../../utils/animate-input-field";

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const formHandler = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, _) => {
      dispatch(loginRequest(values));
    },
  });

  if (user.minorTask !== LOGIN) return;

  return (
    <Modal>
      <LoginPageContainer>
        <LoginFormContainer>
          <ModalTitle> User Login</ModalTitle>
          <Form onSubmit={formHandler.handleSubmit}>
            <FormGroup>
              <InputField>
                <input
                  required
                  type="email"
                  placeholder=""
                  id="emails"
                  name="email"
                  onChange={formHandler.handleChange}
                  value={formHandler.values["email"]}
                />
                <label>Username</label>
              </InputField>
            </FormGroup>
            <FormGroup>
              <InputField>
                <input
                  required
                  type="password"
                  id="passwords"
                  name="password"
                  placeholder=""
                  onChange={formHandler.handleChange}
                  value={formHandler.values["password"]}
                />
                <label>Password</label>
              </InputField>
            </FormGroup>
            <Button type="submit">
              {user.loading ? <SmallSpinner /> : "Login"}{" "}
            </Button>
          </Form>
        </LoginFormContainer>
      </LoginPageContainer>
    </Modal>
  );
};

export default LoginPage;
