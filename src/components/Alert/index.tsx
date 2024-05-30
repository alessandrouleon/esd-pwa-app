import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface CustomizedSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  bgColorsSnack: 'error' | 'success';
}

export const CustomizedSnackbars = ({ open, onClose, message, bgColorsSnack}: CustomizedSnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert
        onClose={onClose}
        severity={bgColorsSnack}
        variant="filled"
        sx={{ width: '100%' }}
      >
     {message}
      </MuiAlert>
    </Snackbar>
  );
};

// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import Snackbar from "@mui/material/Snackbar";
// import React from "react";

// interface AlertContainerProps {
//   setAlert: (alert: AlertState) => void;
//   alert: AlertState;
// }

// // interface AlertState {
// //   open: boolean;
// //   type: "success" | "error" | "warning" | "info";
// //   message: string;
// // }
// interface AlertState {
//   open: boolean;
//   message: string;
//   type: 'error' | 'success' | 'warning' | 'info'; // Definindo as opções possíveis
// }



// const Alert = (props: AlertProps) => {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// };

// const AlertContainer: React.FC<AlertContainerProps> = ({ setAlert, alert }) => {
//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: string
//   ) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setAlert({ ...alert, open: false });
//   };

//   return (
//     <div style={{ marginTop: "25px", position: "absolute" }}>
//       <Snackbar
//         open={alert.open}
//         autoHideDuration={6000}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         {/* encapsulando para resolver problema de scrollTop ser nulo: https://stackoverflow.com/questions/74862197/typeerror-cannot-read-properties-of-null-reading-scrolltop-material-ui */}
//         <div>
//           <Alert
//             onClose={handleClose}
//             severity={alert.type}
//             // sx={{ bgcolor: alert.type === "success" && "var(--neutral-800)" }}
//           >
//             {alert.message}
//           </Alert>
//         </div>
//       </Snackbar>
//     </div>
//   );
// };

// export default AlertContainer;
