import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";
import ListingContainer from "./ListingContainer";
import axios from "axios";

export default function Homes_Rent() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("0");
  const [baths, setBaths] = useState("0");
  const [data, setData] = useState({});
  const [homeType, setHomeType] = useState({
    isSingleFamily: true,
    isMultiFamily: true,
    isApartment: true,
    isCondo: true,
    isTownhouse: true,
  });

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/search",
      params: {
        location: location,
        beds_min: beds,
        baths_min: baths,
        ...homeType,
        status: "forRent",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
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
    <Container>
      <SearchBar
        submitHandler={submitHandler}
        setBaths={setBaths}
        setBeds={setBeds}
        setLocation={setLocation}
        setHomeType={setHomeType}
      />
      <Row className="p-0 m-0 border-top">
        {!Object.values(data).length && (
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8lLj1o8mI7lLHKpC4I5qQUJrf9qLZNhDRA&usqp=CAU"
            className="w-100"
          />
        )}

        <ListingContainer data={data} />
      </Row>
    </Container>
  );
}
