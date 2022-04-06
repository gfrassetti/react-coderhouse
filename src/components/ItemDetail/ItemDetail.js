import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  CardActions,
  useForkRef,
} from "@mui/material";
import { Figure } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import RatingItem from "./RatingItem";
import { useParams } from "react-router-dom";
import ApiJson from "http://localhost:3000/api.json";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    filterProduct();
  });

  const filterProduct = () => {
    return ApiJson.map((product) => {
      if (product.id == id) {
        return setProduct(product);
      }
    });
  };

  return (
    <>
      <p>{product.title}</p>
      <Container maxWidth="sm">
        <Container>
          <Figure>
            <Figure.Image src={`./images/${product.pictureUrl}`} />
          </Figure>
        </Container>
        <Container>
          <Card variant="outlined">
            <ul className="info-detail">
              <li className="title">{product.title}</li>
              <Container className="text-center">
                <RatingItem />
              </Container>
              <li className="subtitle">{product.description}</li>
              <li className="subtitle">{product.price}</li>
            </ul>
            <CardActions>
              <Container className="text-center">
                <Button size="small" color="primary">
                  Ver metodos de pago
                </Button>
              </Container>
            </CardActions>
            <Container>
              <ul className="ul-details">
                {product.details &&
                  product.details.map((detail, index) => {
                    return (
                      <li className="detail-item" key={index}>
                        {detail}
                      </li>
                    );
                  })}
              </ul>
            </Container>
            <ItemCount stock={10} name={product.title} initial={1} />
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default ItemDetail;
