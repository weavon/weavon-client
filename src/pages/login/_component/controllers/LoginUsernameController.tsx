import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

import { LoginFormSchema } from "@/pages/login/_schema/LoginFormSchema";

interface UsernameControllerProps {
  onEnter: () => void;
}

export default function LoginUsernameController({
  onEnter,
}: UsernameControllerProps) {
  const { control } = useFormContext<LoginFormSchema>();

  const handleEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <UsernameInput
          type="text"
          placeholder="Username"
          onChange={field.onChange}
          onKeyDown={handleEnterKeyDown}
          error={!!error}
        />
      )}
    />
  );
}

const UsernameInput = styled(TextField)`
  width: 100%;

  margin: 10px !important;
`;
