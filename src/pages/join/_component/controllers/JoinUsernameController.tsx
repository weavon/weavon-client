import { Controller, useFormContext } from "react-hook-form";

import { Box, TextField } from "@mui/material";

import styled from "styled-components";

import JoinFormSchema from "@pages/join/_schema/JoinFormSchema";

const JoinUsernameController = () => {
  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <JoinUsernameContainer>
          <UsernameInput
            type="text"
            placeholder="Username"
            onChange={field.onChange}
            error={!!error}
          />
        </JoinUsernameContainer>
      )}
    />
  );
};

const JoinUsernameContainer = styled(Box)`
  width: 100%;

  margin: 10px;

  display: flex;
`;

const UsernameInput = styled(TextField)`
  width: 100%;
`;

export default JoinUsernameController;
