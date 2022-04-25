import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { React as React, useContext, useState } from "react";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.css";
import CartContext from "../Context/CartContext";
import { Box } from "@mui/system";
import { Button } from "react-bootstrap";
import Modal from "../ChekoutPage/Modal";
import { Link } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Cart() {
  const { cartProducts, totalPrice, deleteProduct } = useContext(CartContext);

  return (
    <>
      <Container className="cart-container">
        <h2>Detalle del pedido</h2>
        <hr />
        {cartProducts.length > 0 ? (
          cartProducts.map((cartProduct) => {
            return (
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 500,
                  flexGrow: 1,
                }}
                key={cartProduct.id}
              >
                <Grid container spacing={3} sx={{ marginBottom: "10px" }}>
                  <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img
                        alt="complex"
                        src={`../images/${cartProduct.pictureUrl}`}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {cartProduct.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Cantidad: {cartProduct.quantity}
                        </Typography>
                        <Typography variant="body2" color="white">
                          ID: {cartProduct.id}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ cursor: "pointer" }} variant="body2">
                          <DeleteIcon
                            onClick={() => deleteProduct(cartProduct)}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        ${cartProduct.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );
          })
        ) : (
          <p>El carrito se encuentra vacio</p>
        )}
      </Container>
      <hr></hr>
      <Box className="cart-box container">
        <div>
          <Button variant="info" size="sm">
            <Link className="link" to={"/products"}>
              CONTINUAR COMPRA
            </Link>
          </Button>
        </div>
        <div className="card-footer cart-total">
          <p>Total:</p>
          <span>${totalPrice}</span>
        </div>
        {cartProducts.length > 0 && <Modal />}
      </Box>
    </>
  );
}
