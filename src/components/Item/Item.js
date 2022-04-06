import React from "react";
import "./Item.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const { id, title, description, price, pictureUrl } = data;
  return (
    <div className="card-item card col-12 col-sm-6 col-md-3 col-lg-3">
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
        <Button>
          <Link to={`/products/${id}`}> Ver Detalles</Link>
        </Button>
      </Card.Footer>
    </div>
  );
};

export default Item;
