import { React, useContext, useState } from "react";
import "./Item.css";
import { Card, Buttons } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Container } from "@mui/material";
import Toast from "../Toast/Toast";

const Item = ({ data }) => {
  /* redirect */
  const navigate = useNavigate();
  const { id, title, description, price, pictureUrl } = data;
  const { addProductToCart } = useContext(CartContext);

  const viewDetail = () => {
    navigate(`/detail/${id}`);
  };

  const onAdd = (e, count) => {
    e.stopPropagation();
    addProductToCart({ ...data, quantity: count });
  };

  return (
    <>
      <div
        className="card-item card col-12 col-sm-6 col-md-3 col-lg-3"
        onClick={viewDetail}
      >
        <img
          className="product-image"
          src={`../images/${pictureUrl}`}
          alt={pictureUrl}
        ></img>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>${price}</p>
        </div>
        <Container className="link-to-cart">
          <ItemCount stock={10} name={title} initial={1} onAdd={onAdd} />
        </Container>
      </div>
    </>
  );
};

export default Item;
