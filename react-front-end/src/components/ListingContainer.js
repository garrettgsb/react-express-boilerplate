import React from "react";
import Row from "react-bootstrap/Row";
import ListingItem from "./ListingItem";
import "./ListingContainer.scss";

export default function ListingContainer() {
  return (
    <Row lg={2} md={1} className="listingContainer p-0 m-0 d-flex">
      <ListingItem />
      <ListingItem />
      <ListingItem />
    </Row>
  );
}
