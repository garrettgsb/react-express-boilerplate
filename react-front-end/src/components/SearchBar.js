import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("0");
  const [baths, setBaths] = useState("0");

  const fetchData = () => {
    console.log(location);
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: location,
        beds_min: beds,
        baths_min: baths,
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="ms-2 mt-2 pb-2">
      <Form onSubmit={submitHandler}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Location"
              id="location"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Select
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
