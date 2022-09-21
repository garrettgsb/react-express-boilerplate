import React from "react";
import axios from "axios";
import "./index.css";
import Profile from "./components/Profile.js";
import Nav from "./components/Nav.js";
import useAppData from "./hooks/useAppData";

export default function App() {
  const { runs } = useAppData();
  const fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message,
        });
      });
  };
  return (
    <div>
      <Nav />
      <Profile runs={runs}/>
    </div>
  );
}
