import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { ClassNames } from "@emotion/react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ name }) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "rigth",
  });

  const { vertical, horizontal } = state;

  const handleClick = (e, newState) => {
    setOpen(true);
    e.stopPropagation();
    setState({ open: true, ...newState });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button
        variant="contained"
        onClick={(e) =>
          handleClick(e, {
            vertical: "bottom",
            horizontal: "right",
          })
        }
      >
        Agregar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {name} agregado al carrito!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
