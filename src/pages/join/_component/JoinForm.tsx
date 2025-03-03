import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button } from "@mui/material";

import styled from "styled-components";

import JoinFormSchema, {
  JoinFormObject,
} from "@pages/join/_schema/JoinFormSchema";
import JoinUsernameController from "@pages/join/_component/controllers/JoinUsernameController";
import JoinPasswordController from "@pages/join/_component/controllers/JoinPasswordController";
import JoinPasswordConfirmController from "@pages/join/_component/controllers/JoinPasswordConfirmController";

import useToastStore from "@stores/useToastStore";

const JoinForm = () => {
  const { showError } = useToastStore();

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
      console.log("data", data);
    },
    (errors) => {
      const error =
        errors.username || errors.password || errors.passwordConfirm;
      showError(
        error?.message ??
          "Joining has failed. Check your informations and try again."
      );
    }
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
};

const JoinFormContainer = styled(Box)`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinFormButtonContainer = styled(Box)`
  width: 100%;
  margin: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default JoinForm;
