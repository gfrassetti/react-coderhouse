import { React as React, useContext } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import "./Cart.css";
import CartContext from "../Context/CartContext";

export default function Cart() {
  const { cartProducts } = useContext(CartContext);

  return (
    <>
      {" "}
      <div className="cart-container">
        <h2>Detalle del pedido</h2>
        <hr />
        {cartProducts.map((cartProduct) => {
          return (
            <div>
              <img src={`../images/${cartProduct.pictureUrl}`} />
              <p>{cartProduct.title}</p>
              <p>{cartProduct.price}</p>
              <p>{cartProduct.quantity}</p>
              <p>asdad</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
