import { React, useContext, useState } from "react";
import "./Item.css";
import { Card, Buttons } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Container } from "@mui/material";

const Item = ({ data, onAdd, isAdded }) => {
  /* redirect */
  const navigate = useNavigate();
  const { id, title, description, price, pictureUrl, quantity } = data;
  const { cartProducts, addProductToCart } = useContext(CartContext);

  const viewDetail = () => {
    navigate(`/products/${id}`);
  };

  const addToCart = () => {
    /* fx */
    addProductToCart(data);
  };

  return (
    <>
      <div
        className="card-item card col-12 col-sm-6 col-md-3 col-lg-3"
        onClick={viewDetail}
      >
        <img
          className="product-image"
          src={`./images/${pictureUrl}`}
          alt={pictureUrl}
        ></img>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <Container className="link-to-cart">
          {isAdded ? (
            <Link to="/cart">Ir al Checkout</Link>
          ) : (
            <ItemCount
              stock={10}
              name={data.title}
              initial={data.quantity}
              onAdd={onAdd}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default Item;
