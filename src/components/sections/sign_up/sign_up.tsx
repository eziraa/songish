import {
  Button,
  DescriptionText,
  Form,
  FormContainer,
  FormGroup,
  Input,
  Label,
} from "../../pages/utils/form_field_elements.style";
import { Description, Title } from "../about/components.style";
import { SignUpContainer } from "./components.style";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Description>
        <Title>Join Us!</Title>
        <DescriptionText>
          Welcome to MyMusic! Sign up now to explore our vast collection of
          music and connect with other music enthusiasts from around the world.
        </DescriptionText>
      </Description>
      <FormContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input type="text" id="fullName" name="fullName" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Input type="text" id="age" name="gender" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
            />
          </FormGroup>

          <Button type="submit"> submit</Button>
        </Form>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
