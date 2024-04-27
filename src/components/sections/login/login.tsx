import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Title,
} from "../../utils/form_field_elements.style";
import Modal from "../modal/modal";
import { LoginFormContainer, LoginPageContainer } from "./components.style";

const LoginPage = () => {
  return (
    <Modal>
      <LoginPageContainer>
        <LoginFormContainer>
          <Title style={{ color: "black" }}>Login</Title>
          <Form>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="emails"
                placeholder="Enter your email"
                name="email"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="passwords"
                placeholder="Enter your password"
                name="password"
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
