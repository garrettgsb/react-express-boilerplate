import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ListingItem(props) {
  return (
    <Col className=" listingItem">
      <Card>
        <Card.Img
          className="card_img"
          variant="top"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
        />
        <Card.Body>
          <Card.Title>PRICE</Card.Title>
          <Card.Text>
            <p>x bds | x ba | 800sqft</p>
            <p>address</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
