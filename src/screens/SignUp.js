import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Buttons";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import styled from "styled-components";
import { FatLink } from "../components/shared";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";
import FormError from "../components/auth/FormError";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled(FatLink)`
  text-align: center;
  font-size: 16px;
  margin-top: 16px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $location: String!
    $password: String!
    $avatarURL: String!
    $githubUsername: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      location: $location
      password: $password
      avatarURL: $avatarURL
      githubUsername: $githubUsername
    ) {
      id
    }
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors, formState, setError, getValues } =
    useForm({
      mode: "onChange",
    });

  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { id },
    } = data;
    if (!id) {
      return;
    }
    navigate(routes.home, {
      state: { message: "Account created. Please log in.", username, password },
    });
  };

  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const onSubmitValid = () => {
    if (loading) {
      return;
    }
    const { username, name, password, email } = getValues();
    createAccount({
      variables: {
        username,
        name,
        githubUsername: "",
        avatarURL: "",
        location: "",
        password,
        email,
      },
    });
  };

  return (
    <AuthLayout>
      <PageTitle title="Sign Up" />
      <FormBox>
        <HeaderContainer>
          <h1>Nomad Coffee</h1>
          <SubTitle>
            Sign up to see photos and videos from your friends.
          </SubTitle>
        </HeaderContainer>
        <form onSubmit={handleSubmit(onSubmitValid)}>
          <Input
            {...register("email", { required: "Email is required." })}
            type="text"
            placeholder="Email"
            hasError={Boolean(formState.errors?.email?.message)}
          />
          <Input
            {...register("name", { required: "Name is required." })}
            type="text"
            placeholder="Name"
            hasError={Boolean(formState.errors?.name?.message)}
          />
          <Input
            {...register("username", {
              required: "Username is required.",
              minLength: {
                value: 3,
                message: "Username should be longer than 3 chars.",
              },
            })}
            type="text"
            placeholder="Username"
            hasError={Boolean(formState.errors?.username?.message)}
          />
          <Input
            {...register("password", { required: "Password is required." })}
            type="password"
            placeholder="Password"
            hasError={Boolean(formState.errors?.password?.message)}
          />
          <FormError message={formState.errors?.username?.message} />
          <FormError message={formState.errors?.result?.message} />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign Up"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" link={routes.home} linkText="Log In" />
    </AuthLayout>
  );
}

export default SignUp;
