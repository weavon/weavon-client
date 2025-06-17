import { zodResolver } from "@hookform/resolvers/zod";
import { Button, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useAuthLoginMutation from "@/apis/auth/mutations/useAuthLoginMutation";
import LoginPasswordController from "@/pages/login/_component/controllers/LoginPasswordController";
import LoginUsernameController from "@/pages/login/_component/controllers/LoginUsernameController";
import {
  LoginFormObject,
  LoginFormSchema,
} from "@/pages/login/_schema/LoginFormSchema";
import useAuthStore from "@/stores/useAuthStore";
import useToastStore from "@/stores/useToastStore";

function LoginForm() {
  const { t } = useTranslation();

  const { logout } = useAuthStore();
  const { showSuccess, showError } = useToastStore();

  const { mutate: authLoginMutate } = useAuthLoginMutation();

  const navigate = useNavigate();
  const method = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormObject),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const requestLogin = (username: string, password: string) => {
    authLoginMutate(
      {
        username,
        password,
      },
      {
        onSuccess: () => {
          showSuccess(t("login.form.message.LOGIN_SUCCESS", { username }));
          navigate("/");
        },
        onError: () => {
          logout();
          showError(t("login.form.message.LOGIN_FAILED"));
        },
      },
    );
  };

  const submit = method.handleSubmit(
    (data) => {
      const username = data.username;
      const password = data.password;

      requestLogin(username, password);
    },
    (errors) => {
      const errorMessage = errors.username?.message || errors.password?.message;

      if (errorMessage) {
        showError(errorMessage);
      }
    },
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
            {t("login.form.label.SIGN_UP")}
          </Button>
          <Button type="submit" onClick={handleSignIn}>
            {t("login.form.label.SIGN_IN")}
          </Button>
        </LoginFormButtonContainer>
      </LoginFormContainer>
    </FormProvider>
  );
}

const LoginFormContainer = styled("div")`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginFormButtonContainer = styled("div")`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default LoginForm;
