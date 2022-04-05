import React from "react";
import { Container, Card, Button, CardActions } from "@mui/material";
import { Figure } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import RatingItem from "./RatingItem";

const ItemDetail = ({ product }) => {
  const { id, title, description, price, pictureUrl, details } = product;
  {
    console.log(details);
  }
  return (
    <>
      <p>{title}</p>
      <Container maxWidth="sm">
        <Container>
          <Figure>
            <Figure.Image src={`./images/${pictureUrl}`} />
          </Figure>
        </Container>
        <Container>
          <Card variant="outlined">
            <ul className="info-detail">
              <li className="title">{title}</li>
              <Container className="text-center">
                <RatingItem />
              </Container>
              <li className="subtitle">{description}</li>
              <li className="subtitle">{price}</li>
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
                {details &&
                  details.map((detail, index) => {
                    return (
                      <li className="detail-item" key={index}>
                        {detail}
                      </li>
                    );
                  })}
              </ul>
            </Container>
            <ItemCount stock={10} name={title} initial={1} />
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default ItemDetail;
