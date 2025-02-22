import { useNavigate } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button } from "@mui/material";

import styled from "styled-components";

import useAuthLoginMutation from "@apis/auth/hooks/useAuthLoginMutation";

import LoginFormSchema, {
  LoginFormObject,
} from "@pages/login/_schema/LoginFormSchema";
import UsernameController from "@pages/login/_component/controllers/UsernameController";
import PasswordController from "@pages/login/_component/controllers/PasswordController";

import useAuthStore from "@stores/useAuthStore";

const LoginForm = () => {
  const { login } = useAuthStore();

  const { mutate: authLoginMutate } = useAuthLoginMutation();

  const navigate = useNavigate();

  const requestLogin = (username: string, password: string) => {
    authLoginMutate(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          const authorization = data.headers["authorization"];
          login(authorization.substring(7));
          navigate("/");
        },
      }
    );
  };

  const method = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormObject),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleEnter = () => {
    handleSignIn();
  };

  const handleSignIn = method.handleSubmit((data) => {
    const username = data.username;
    const password = data.password;

    requestLogin(username, password);
  });

  return (
    <FormProvider {...method}>
      <LoginFormContainer>
        <UsernameController onEnter={handleEnter} />
        <PasswordController onEnter={handleEnter} />
        <LoginFormButtonContainer>
          <Button>Sign Up</Button>
          <Button type="submit" onClick={handleSignIn}>
            Sign In
          </Button>
        </LoginFormButtonContainer>
      </LoginFormContainer>
    </FormProvider>
  );
};

const LoginFormContainer = styled(Box)`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginFormButtonContainer = styled(Box)`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default LoginForm;
