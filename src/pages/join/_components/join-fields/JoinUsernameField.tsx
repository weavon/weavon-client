import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { JoinFormSchema } from "@/pages/join/_schema/JoinFormSchema";

const JoinUsernameField = () => {
  const { t } = useTranslation();

  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type="text"
          placeholder={t("join.form.label.USERNAME")}
          onChange={field.onChange}
          error={!!error}
          sx={{
            width: "100%",
          }}
        />
      )}
    />
  );
};

export default JoinUsernameField;
