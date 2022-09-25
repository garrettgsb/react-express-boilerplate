import React from "react";
import Row from "react-bootstrap/Row";
import ListingItem from "./ListingItem";
import ListGroup from "react-bootstrap/ListGroup";

export default function ListingContainer(props) {
  let data = props.data;
  let dataArray;

  if (Object.values(data).length !== 0) {
    dataArray = data.map((property) => (
      <ListingItem key={property.zpid} {...property} />
    ));
  }

  return (
    <Row className="listingContainer p-0 m-0 d-flex">
      <ListGroup variant="flush">{dataArray}</ListGroup>
    </Row>
  );
}
