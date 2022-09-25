import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SearchBar(props) {
  const { submitHandler, setLocation, setBeds, setBaths, setMaxPrice } = props;
  return (
    <div className="ms-2 mt-2 pb-2">
      <Form onSubmit={submitHandler} size="sm">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Location"
              id="location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              aria-label="Default select example"
              id="beds"
              name="beds"
              onChange={(e) => setBeds(e.target.value)}
            >
              <option value="0">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              aria-label="Default select example"
              id="baths"
              name="baths"
              onChange={(e) => setBaths(e.target.value)}
            >
              <option value="0">Bathrooms</option>
              <option value="1">1+</option>
              <option value="1.5">1.5+</option>
              <option value="2">2+</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              aria-label="Default select example"
              id="homeType"
              name="homeType"
            >
              <option>Home type</option>
              <option value="house">Houses</option>
              <option value="apartment">Apartments</option>
              <option value="townhome">Townhomes</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              aria-label="Default select example"
              id="price"
              name="price"
              onChange={(e) => setMaxPrice(e.target.value)}
            >
              <option>Max Price</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
              <option value="4000">$4000</option>
              <option value="5000">$5000</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button type="submit" className="" size="sm">
              Filter
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
