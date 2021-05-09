import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";

// state = {
//   title: "",
//   description: "",
//   img_link: "",
//   project_link: "",
//   for_sale: false,
//   price: 0,
// };

// useEffect(() => {
//   axios.post(`/api/artworks`, {nameInput: variable here, Title}).then((res) => {
//     console.log("this is an artwork post request", res.data.job);
//     setState(res.data.job[0]);
//   });
// }, []);

// App.post("/api/artworks", (req, res) => {
//   const data = db.query("INSERT INTO artworks (author_id, title, img_link, project_link, descrip, for_sale, price) VALUES ").then((response) => {
//     res.json({
//       artworks: response.rows,
//     });
//   });
// })

export default function User(props) {
  let { id } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  // console.log("user", typeof props.activeUser);
  // console.log("id", typeof id);
  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => {
      // console.log("pirate treasure", res.data.portfolio);
      setPortfolio(res.data.portfolio);
    });
  }, []);

  return (
    <div>
      <div>
        <Form />
      </div>
      <div className="profile">{portfolio[0] && portfolio[0].username}</div>
      {id == props.activeUser && <div>add Image</div>}
      <div>add another image</div>
      <Artworks art={portfolio} />
    </div>
  );
}
