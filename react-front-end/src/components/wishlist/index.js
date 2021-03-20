import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantList from "../plantList/plantList";



export default function Wishlist(props) {
  const [myWishlist, setMyWishlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/wishlist", {withCredentials: true})
    .then((res) => {
      console.log("Request for wishlist data received by the server");
      // console.log(res.data);
      setMyWishlist(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);


  return (
    <>
      <Hero
        header="My Wishlist"
        text="All the plants that you could wish for!"
        gardenButton="true"
      ></Hero>
      <Container>
        <PlantList
          list={myWishlist}
        />
      </Container>
    </>
  );
};