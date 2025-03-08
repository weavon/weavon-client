import { Controller, useFormContext } from "react-hook-form";

import { TextField } from "@mui/material";

import styled from "styled-components";

import JoinFormSchema from "@pages/join/_schema/JoinFormSchema";

const JoinPasswordConfirmController = () => {
  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="passwordConfirm"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordCheckInput
          type="password"
          placeholder="Confirm Password"
          onChange={field.onChange}
          error={!!error}
        />
      )}
    />
  );
};

const PasswordCheckInput = styled(TextField)`
  width: 100%;

  margin: 10px !important;
`;

export default JoinPasswordConfirmController;
