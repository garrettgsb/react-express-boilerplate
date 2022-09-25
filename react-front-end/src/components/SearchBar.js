import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SearchBar(props) {
  const { submitHandler, setLocation, setBeds, setBaths, setHomeType } = props;

  const changeHandler = (e) => {
    let homeTypeObj = {
      isSingleFamily: false,
      isMultiFamily: false,
      isApartment: false,
      isCondo: false,
      isTownhouse: false,
    };
    if (e.target.value === "house") {
      homeTypeObj.isSingleFamily = true;
    } else if (e.target.value === "apartment") {
      homeTypeObj.isApartment = true;
    } else if (e.target.value === "condo") {
      homeTypeObj.isCondo = true;
    } else if (e.target.value === "townhome") {
      homeTypeObj.isTownhouse = true;
    } else if (e.target.value === "all") {
      homeTypeObj.isSingleFamily = true;
      homeTypeObj.isMultiFamily = true;
      homeTypeObj.isApartment = true;
      homeTypeObj.isCondo = true;
      homeTypeObj.isTownhouse = true;
    }
    setHomeType(homeTypeObj);
  };

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
              <option>Bedrooms</option>
              <option value="0">0</option>
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
              onChange={changeHandler}
            >
              <option value="all">Home type</option>
              <option value="house">Houses</option>
              <option value="apartment">Apartments</option>
              <option value="condo">Condos</option>
              <option value="townhome">Townhomes</option>
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
