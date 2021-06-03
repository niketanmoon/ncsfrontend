import React from "react";
import "./movieItem.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";

const MovieItem = ({ item }) => {
  console.log(item.images["Poster Art"].url);
  return (
    <Card className="card-style">
      <CardImg
        top
        width="30%"
        src={item.images["Poster Art"].url}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardSubtitle>${item.releaseYear}</CardSubtitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default MovieItem;
