import React from "react";
import "./Item.css";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

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
        <Router>
          <LinkContainer to="/products">
            <Button>Ver mas</Button>
          </LinkContainer>
        </Router>
      </Card.Footer>
      {/*       <ItemCount stock={10} name="Producto 1" initial={1} /> */}
    </div>
  );
};

export default Item;
