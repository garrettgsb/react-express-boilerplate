import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";

export default function User(props) {
  let { id } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  console.log("user", props.activeUser);
  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => {
      console.log("pirate treasure", res.data.portfolio);
      setPortfolio(res.data.portfolio);
    });
  }, []);

  return (
    <div>
      <div className="profile">{portfolio[0] && portfolio[0].username}</div>
      {id === props.activeUser && <div>add Image</div>}
      <Artworks art={portfolio} />
    </div>
  );
}
