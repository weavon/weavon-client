import { Alert, Grow, Snackbar } from "@mui/material";

import useToastStore from "@/stores/useToastStore";

export default function Toast() {
  const { open, message, type, hide } = useToastStore();

  const handleClose = () => {
    hide();
  };

  return (
    open && (
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleClose}
        slots={{
          transition: Grow,
        }}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    )
  );
}
