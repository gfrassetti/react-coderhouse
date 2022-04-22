import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Form } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  let { cartProducts, totalPrice, setCartProducts } =
    React.useContext(CartContext);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = React.useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        price: cartProduct.price,
        title: cartProduct.title,
      };
    }),
    total: totalPrice,
  });
  const redirect = useNavigate();
  const [successOrder, setSuccessOrder] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrder = { ...order, buyer: formData };
    setOrder(prevOrder);
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, "orders");
    const orderDoc = await addDoc(orderFirebase, prevOrder);
    console.log("Orden generada: ", orderDoc.id);
    setSuccessOrder(orderDoc.id);
    setTimeout(() => {
      redirect(`/products`);
      setCartProducts([]);
    }, 2000);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        COMPLETAR COMPRA
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {successOrder ? (
          <DialogTitle>{`Orden generada correctamente!: ${successOrder}`}</DialogTitle>
        ) : (
          <DialogContent>
            <DialogContentText>Form Checkout</DialogContentText>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Celphone"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Enviar</Button>
              </DialogActions>
            </Form>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
