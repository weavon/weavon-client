import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { JoinFormSchema } from "@/pages/join/_schema/JoinFormSchema";

function JoinPasswordController() {
  const { control } = useFormContext<JoinFormSchema>();

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          type="password"
          placeholder="Password"
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
