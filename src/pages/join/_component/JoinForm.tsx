import { zodResolver } from "@hookform/resolvers/zod";
import { Button, styled } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useAuthJoinMutation from "@/apis/auth/mutations/useAuthJoinMutation";
import JoinPasswordConfirmController from "@/pages/join/_component/controllers/JoinPasswordConfirmController";
import JoinPasswordController from "@/pages/join/_component/controllers/JoinPasswordController";
import JoinUsernameController from "@/pages/join/_component/controllers/JoinUsernameController";
import {
  JoinFormObject,
  JoinFormSchema,
} from "@/pages/join/_schema/JoinFormSchema";
import useToastStore from "@/stores/useToastStore";

function JoinForm() {
  const navigate = useNavigate();

  const { showSuccess, showError } = useToastStore();

  const { mutate: authJoinMutate } = useAuthJoinMutation();

  const method = useForm<JoinFormSchema>({
    resolver: zodResolver(JoinFormObject),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const submit = method.handleSubmit(
    (data) => {
      authJoinMutate(
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
              error.response?.data.value.message ?? "Joining has failed.",
            );
          },
        },
      );
    },
    (errors) => {
      const error =
        errors.username || errors.password || errors.passwordConfirm;
      showError(
        error?.message ??
          "Joining has failed. Check your informations and try again.",
      );
    },
  );

  const handleSignUp = () => {
    submit();
  };

  return (
    <FormProvider {...method}>
      <JoinFormContainer>
        <JoinUsernameController />
        <JoinPasswordController />
        <JoinPasswordConfirmController />
        <JoinFormButtonContainer>
          <Button type="submit" onClick={handleSignUp}>
            Sign Up
          </Button>
        </JoinFormButtonContainer>
      </JoinFormContainer>
    </FormProvider>
  );
}

const JoinFormContainer = styled("div")`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinFormButtonContainer = styled("div")`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default JoinForm;
