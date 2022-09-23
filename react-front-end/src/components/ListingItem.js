import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ListingItem(props) {
  const {
    bathrooms,
    bedrooms,
    homeType,
    price,
    streetAddress,
    city,
    zipcode,
    zpid,
    lotAreaUnit,
    lotAreaValue,
  } = props;

  console.log(zpid);
  return (
    <Col className=" listingItem">
      <Card>
        <Card.Img
          className="card_img"
          variant="top"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
        />
        <Card.Body>
          <Card.Title>${price}</Card.Title>
          <Card.Text>
            <span className="homeType">Home Type: {homeType} </span>
            <span>
              {bedrooms} bds | {bathrooms} ba | {lotAreaValue} {lotAreaUnit}
            </span>
            <span>
              {streetAddress}, {city}, {zipcode}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
