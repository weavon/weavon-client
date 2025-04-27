import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

import JoinFormSchema from "@/pages/join/_schema/JoinFormSchema";

const JoinPasswordController = () => {
  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          type="password"
          placeholder="Password"
          onChange={field.onChange}
          error={!!error}
        />
      )}
    />
  );
};

const PasswordInput = styled(TextField)`
  width: 100%;

  margin: 10px !important;
`;

export default JoinPasswordController;
