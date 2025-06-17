import React from "react";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { LoginFormSchema } from "@/pages/login/_schema/LoginFormSchema";

interface PasswordControllerProps {
  onEnter: () => void;
}

function LoginPasswordController({ onEnter }: PasswordControllerProps) {
  const { t } = useTranslation();
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
        <TextField
          type="password"
          placeholder={t("login.form.label.PASSWORD")}
          onChange={field.onChange}
          onKeyDown={handleEnterKeyDown}
          error={!!error}
          sx={{
            width: "100%",
            margin: "10px !important",
          }}
        />
      )}
    />
  );
}

export default LoginPasswordController;
