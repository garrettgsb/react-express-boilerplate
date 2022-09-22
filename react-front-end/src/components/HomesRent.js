import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListingContainer from "./ListingContainer";
import "./Homes_Rent.scss";
import axios from "axios";

export default function Homes_Rent() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("0");
  const [baths, setBaths] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");
  const [data, setData] = useState({});

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: location,
        beds_min: beds,
        baths_min: baths,
        price_max: maxPrice,
        status: "forRent",
      },
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="rent">
      <SearchBar
        submitHandler={submitHandler}
        setBaths={setBaths}
        setBeds={setBeds}
        setLocation={setLocation}
        setMaxPrice={setMaxPrice}
      />
      <Row className="p-0 m-0 border-top">
        <Col className="mapContainer">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8lLj1o8mI7lLHKpC4I5qQUJrf9qLZNhDRA&usqp=CAU"
            className="w-100"
          />
        </Col>
        <ListingContainer data={data} />
      </Row>
    </div>
  );
}
