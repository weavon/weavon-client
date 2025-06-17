import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { JoinFormSchema } from "@/pages/join/_schema/JoinFormSchema";

function JoinPasswordController() {
  const { t } = useTranslation();

  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type="password"
          placeholder={t("join.form.label.PASSWORD")}
          onChange={field.onChange}
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

export default JoinPasswordController;
