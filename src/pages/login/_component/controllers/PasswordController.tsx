import { Controller, useFormContext } from "react-hook-form";

import { TextField } from "@mui/material";

import styled from "styled-components";

import LoginFormSchema from "@pages/login/_schema/LoginFormSchema";

interface PasswordControllerProps {
  onEnter: () => void;
}

const PasswordController = ({ onEnter }: PasswordControllerProps) => {
  const { control } = useFormContext<LoginFormSchema>();

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <PasswordInput
          type="password"
          placeholder="Password"
          onChange={field.onChange}
          onKeyDown={handleEnterKeyDown}
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

export default PasswordController;
