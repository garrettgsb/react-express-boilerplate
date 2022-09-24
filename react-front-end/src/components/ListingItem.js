import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function ListingItem(props) {
  const {
    bathrooms,
    bedrooms,
    homeType,
    price,
    streetAddress,
    city,
    state,
    zipcode,
    zpid,
    lotAreaUnit,
    lotAreaValue,
  } = props;

  console.log(zpid);

  const formatHomeType = (homeType) => {
    let result = homeType.split("");
    return result
      .map((char) => (char === "_" ? " " : char))
      .join("")
      .toLowerCase();
  };

  return (
    <Col className=" listingItem">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2">
          <div className="fw-bold d-flex">
            {streetAddress}, {city}, {state}, {zipcode}
          </div>
          <div className="fw-light d-flex">
            {bedrooms} bds | {bathrooms} ba | {lotAreaValue} {lotAreaUnit}
          </div>
          <div className="fw-light d-flex">
            Home Type: {formatHomeType(homeType)}
          </div>
        </div>
        <Badge bg="primary" pill>
          ${price}
        </Badge>
      </ListGroup.Item>
    </Col>
  );
}
