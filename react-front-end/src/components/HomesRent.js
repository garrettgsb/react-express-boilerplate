import React from "react";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListingContainer from "./ListingContainer";
import "./Homes_Rent.scss";

export default function Homes_Rent() {
  return (
    <div className="rent">
      <SearchBar></SearchBar>
      <Row className="p-0 m-0 border-top">
        <Col className="mapContainer">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8lLj1o8mI7lLHKpC4I5qQUJrf9qLZNhDRA&usqp=CAU"
            className="w-100"
          />
        </Col>
        <ListingContainer />
      </Row>
    </div>
  );
}
