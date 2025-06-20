import { zodResolver } from "@hookform/resolvers/zod";
import { Button, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useAuthJoinMutation from "@/apis/auth/mutations/useAuthJoinMutation";
import JoinPasswordConfirmField from "@/pages/join/_components/join-fields/JoinPasswordConfirmField";
import JoinPasswordField from "@/pages/join/_components/join-fields/JoinPasswordField";
import JoinUsernameField from "@/pages/join/_components/join-fields/JoinUsernameField";
import {
  JoinFormObject,
  JoinFormSchema,
} from "@/pages/join/_schema/JoinFormSchema";
import useToastStore from "@/stores/useToastStore";

const JoinForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { showSuccess, showError } = useToastStore();

  const { mutate: mutateAuthJoin } = useAuthJoinMutation();

  const joinForm = useForm<JoinFormSchema>({
    resolver: zodResolver(JoinFormObject),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const submitJoin = joinForm.handleSubmit(
    (data) => {
      mutateAuthJoin(
        {
          username: data.username,
          password: data.password,
        },
        {
          onSuccess: (data) => {
            showSuccess(data.data.value);
            navigate("/login");
          },
          onError: (error) => {
            showError(
              error.response?.data.value.message ??
                t("join.form.message.JOIN_FAILED"),
            );
          },
        },
      );
    },
    (errors) => {
      const error =
        errors.username || errors.password || errors.passwordConfirm;
      showError(error?.message ?? t("join.form.message.JOIN_FAILED_CONFIRM"));
    },
  );

  const handleSignUp = () => {
    submitJoin();
  };

  return (
    <FormProvider {...joinForm}>
      <JoinFormContainer>
        <JoinUsernameField />
        <JoinPasswordField />
        <JoinPasswordConfirmField />
        <JoinFormButtonWrapper>
          <Button type="submit" onClick={handleSignUp}>
            {t("join.form.label.SIGN_UP")}
          </Button>
        </JoinFormButtonWrapper>
      </JoinFormContainer>
    </FormProvider>
  );
};

const JoinFormContainer = styled("div")`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinFormButtonWrapper = styled("div")`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default JoinForm;
