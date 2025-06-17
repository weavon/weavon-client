import { Box, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { JoinFormSchema } from "@/pages/join/_schema/JoinFormSchema";

function JoinUsernameController() {
  const { t } = useTranslation();

  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box
          sx={{
            width: "100%",
            margin: "10px",
            display: "flex",
          }}
        >
          <TextField
            type="text"
            placeholder={t("join.form.label.USERNAME")}
            onChange={field.onChange}
            error={!!error}
            sx={{
              width: "100%",
            }}
          />
        </Box>
      )}
    />
  );
}

export default JoinUsernameController;
