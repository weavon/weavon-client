import { Alert, Grow, Snackbar } from "@mui/material";

import useToastStore from "@stores/useToastStore";

const Toast = () => {
  const { open, message, type, hide } = useToastStore();

  const handleClose = () => {
    hide();
  };

  return (
    open && (
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={(props) => <Grow {...props} />}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    )
  );
};

export default Toast;
