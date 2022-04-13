import { React, useContext, useState } from "react";
import "./Item.css";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Item = ({ data }) => {
  /* redirect */
  const navigate = useNavigate();
  const { id, title, description, price, pictureUrl } = data;
  const { cartProducts, addProductToCart } = useContext(CartContext);

  const viewDetail = () => {
    navigate(`/products/${id}`);
  };

  const addToCart = (e) => {
    e.stopPropagation();
    /* fx */
    addProductToCart(data);
  };

  return (
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
      <Card.Footer>
        <Button onClick={addToCart}>Comprar</Button>
      </Card.Footer>
    </div>
  );
};

export default Item;
