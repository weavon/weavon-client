import { Controller, useFormContext } from "react-hook-form";

import { TextField } from "@mui/material";

import styled from "styled-components";

import LoginFormSchema from "@pages/login/_schema/LoginFormSchema";

const PasswordController = () => {
  const { control } = useFormContext<LoginFormSchema>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field }) => (
        <PasswordInput type="password" onChange={field.onChange} />
      )}
    />
  );
};

const PasswordInput = styled(TextField)`
  margin: 10px !important;
`;

export default PasswordController;
