import React, { useState, forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import "./ItemCount.css";
import Toast from "../Toast/Toast";

const ItemCount = (prop) => {
  const { stock, name, initial, onAdd } = prop;

  let [count, setCount] = useState(initial);

  const addtItem = (e) => {
    e.stopPropagation();
    count < stock
      ? setCount(count + 1)
      : console.log(`El stock es de ${stock}`);
  };

  const removeItem = (e) => {
    e.stopPropagation();
    count > initial
      ? setCount(count - 1)
      : console.log(`El stock minimo es de 1 unidad`);
  };

  /*  */
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
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
  /*  */

  return (
    <>
      <div className="card-footer">
        <p>{name}</p>
        <div className="div-quantity">
          <button className="btn" onClick={removeItem}>
            -
          </button>
          <span>{count}</span>
          <button className="btn" onClick={addtItem}>
            +
          </button>
        </div>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Button
            variant="outlined"
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
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {name} agregado al carrito!
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </>
  );
};

export default ItemCount;
