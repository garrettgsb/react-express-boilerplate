import React from "react";
import Row from "react-bootstrap/Row";
import ListingItem from "./ListingItem";
import "./ListingContainer.scss";

export default function ListingContainer(props) {
  let data = props.data;
  let dataArray;

  if (Object.values(data).length !== 0) {
    dataArray = data.map((property) => (
      <ListingItem key={property.zpid} {...property} />
    ));
  }
  console.log(data);

  return (
    <Row lg={2} md={1} className="listingContainer p-0 m-0 d-flex">
      {dataArray}
    </Row>
  );
}
