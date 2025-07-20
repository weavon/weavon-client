import { zodResolver } from "@hookform/resolvers/zod";
import { Button, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useLoginMutation from "@/apis/security/mutations/useAuthLoginMutation";
import LoginPasswordField from "@/pages/login/_components/login-fields/LoginPasswordField";
import LoginUsernameField from "@/pages/login/_components/login-fields/LoginUsernameField";
import {
  LoginFormObject,
  LoginFormSchema,
} from "@/pages/login/_schema/LoginFormSchema";
import useAuthStore from "@/stores/useAuthStore";
import useToastStore from "@/stores/useToastStore";

const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { logout } = useAuthStore();
  const { showSuccess, showError } = useToastStore();

  const { mutate: mutateAuthLogin } = useLoginMutation();

  const method = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormObject),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const requestLogin = (username: string, password: string) => {
    mutateAuthLogin(
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

  const submitLogin = method.handleSubmit(
    (data) => {
      const username = data.username;
      const password = data.password;

      requestLogin(username, password);
    },
    (errors) => {
      const errorMessage = errors.username?.message || errors.password?.message;
      showError(errorMessage || t("login.form.message.LOGIN_FAILED"));
    },
  );

  const handleEnter = () => {
    submitLogin();
  };

  const handleSignUp = () => {
    navigate("/join");
  };

  const handleSignIn = () => {
    submitLogin();
  };

  return (
    <FormProvider {...method}>
      <LoginFormContainer>
        <LoginUsernameField onEnter={handleEnter} />
        <LoginPasswordField onEnter={handleEnter} />
        <LoginFormButtonWrapper>
          <Button onClick={handleSignUp}>
            {t("login.form.label.SIGN_UP")}
          </Button>
          <Button onClick={handleSignIn}>
            {t("login.form.label.SIGN_IN")}
          </Button>
        </LoginFormButtonWrapper>
      </LoginFormContainer>
    </FormProvider>
  );
};

const LoginFormContainer = styled("form")`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginFormButtonWrapper = styled("div")`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default LoginForm;
