import { useNavigate } from "react-router-dom";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button } from "@mui/material";

import styled from "styled-components";

import useAuthLoginMutation from "@apis/auth/mutations/useAuthLoginMutation";

import LoginFormSchema, {
  LoginFormObject,
} from "@pages/login/_schema/LoginFormSchema";
import LoginUsernameController from "@pages/login/_component/controllers/LoginUsernameController";
import LoginPasswordController from "@pages/login/_component/controllers/LoginPasswordController";

import useAuthStore from "@stores/useAuthStore";
import useToastStore from "@stores/useToastStore";

const LoginForm = () => {
  const { login } = useAuthStore();

  const { showSuccess, showError } = useToastStore();

  const { mutate: authLoginMutate } = useAuthLoginMutation();

  const method = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormObject),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const requestLogin = (username: string, password: string) => {
    authLoginMutate(
      {
        username,
        password,
      },
      {
        onSuccess: (data) => {
          showSuccess(`Welcome back, ${username}!`);

          const authorization = data.headers["authorization"];
          login(authorization.substring(7));
          navigate("/");
        },
        onError: () => {
          showError("Invalid username or password. Please try again.");
        },
      }
    );
  };

  const submit = method.handleSubmit(
    (data) => {
      const username = data.username;
      const password = data.password;

      requestLogin(username, password);
    },
    (errors) => {
      const error = errors.username || errors.password;
      showError(
        error?.message ??
          "Login has failed. Check your informations and try again."
      );
    }
  );

  const handleEnter = () => {
    submit();
  };

  const handleSignUp = () => {
    navigate("/join");
  };

  const handleSignIn = () => {
    submit();
  };

  return (
    <FormProvider {...method}>
      <LoginFormContainer>
        <LoginUsernameController onEnter={handleEnter} />
        <LoginPasswordController onEnter={handleEnter} />
        <LoginFormButtonContainer>
          <Button type="button" onClick={handleSignUp}>
            Sign Up
          </Button>
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
