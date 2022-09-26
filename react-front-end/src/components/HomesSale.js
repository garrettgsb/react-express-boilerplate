import React, { useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import SearchBar from "./SearchBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ListingContainer from "./ListingContainer";
import axios from "axios";
import "./HomesRent.scss";

export default function Homes_Sale() {
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("1");
  const [baths, setBaths] = useState("0");
  const [data, setData] = useState({});
  const [homeType, setHomeType] = useState({
    isSingleFamily: true,
    isMultiFamily: true,
    isApartment: true,
    isCondo: true,
    isTownhouse: true,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY,
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
        status: "forSale",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data.results);
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
        {!Object.values(data).length && isLoaded && (
          <GoogleMap
            zoom={4}
            center={{ lat: 49, lng: -106 }}
            mapContainerClassName="map-container"
          ></GoogleMap>
        )}

        <ListingContainer data={data} />
      </Row>
    </Container>
  );
}
