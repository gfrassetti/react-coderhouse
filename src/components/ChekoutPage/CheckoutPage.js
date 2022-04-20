import React, { useContext, useState } from "react";
import CartContext from "../Context/CartContext";

const CheckoutPage = () => {
  const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext);


  return (
    <React.Fragment>
      <h2>Pagina de Chekout</h2>
    </React.Fragment>
  );
};

export default CheckoutPage;
