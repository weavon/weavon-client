import { Controller, useFormContext } from "react-hook-form";

import { TextField } from "@mui/material";

import styled from "styled-components";

import LoginFormSchema from "@pages/login/_schema/LoginFormSchema";

const UsernameController = () => {
  const { control } = useFormContext<LoginFormSchema>();

  return (
    <Controller
      name="username"
      control={control}
      render={({ field }) => (
        <UsernameInput type="text" onChange={field.onChange} />
      )}
    />
  );
};

const UsernameInput = styled(TextField)`
  margin: 10px !important;
`;

export default UsernameController;
