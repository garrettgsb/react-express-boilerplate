import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function SearchBar() {
  return (
    <div className="ms-2 mt-2 pb-2">
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Select aria-label="Default select example">
              <option>Bedrooms</option>
              <option value="Any">Any</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
              <option value="3+">3+</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select aria-label="Default select example">
              <option>Bathrooms</option>
              <option value="Any">Any</option>
              <option value="1+">1+</option>
              <option value="1.5+">1.5+</option>
              <option value="2+">2+</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select aria-label="Default select example">
              <option>Home type</option>
              <option value="houses">Houses</option>
              <option value="apartments/condos">Apartments/Condos</option>
              <option value="townhomes">Townhomes</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select aria-label="Default select example">
              <option>Max Price</option>
              <option value="2000">$2000</option>
              <option value="2000">$3000</option>
              <option value="2000">$4000</option>
              <option value="2000">$5000</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button type="submit" className="">
              Filter
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
