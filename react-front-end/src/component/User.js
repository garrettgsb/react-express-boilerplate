import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";

export default function User(props) {
  let { id } = useParams();
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => {
      console.log("pirate treasure", res.data.portfolio);
      setPortfolio(res.data.portfolio);
    });
  }, []);

  return <Artworks art={portfolio} />;
}
