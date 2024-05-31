import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export const initialStateAlert = {
  open: false,
  message: "",
  type: "error" as "error" | "success",
};


interface CustomizedSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  bgColorsSnack: "error" | "success";
}

export const CustomizedSnackbars = ({
  open,
  onClose,
  message,
  bgColorsSnack,
}: CustomizedSnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        onClose={onClose}
        severity={bgColorsSnack}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
