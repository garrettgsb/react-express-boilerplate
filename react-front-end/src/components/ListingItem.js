import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import ModalContent from "./ModalContent";
import "./ListingItem.scss";

export default function ListingItem(props) {
  const [reactState, setReactState] = useState({
    show: false,
    data: {},
  });
  const {
    bathrooms,
    bedrooms,
    homeType,
    price,
    streetAddress,
    city,
    state,
    zipcode,
    zpid,
    lotAreaUnit,
    lotAreaValue,
  } = props;

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://zillow56.p.rapidapi.com/property",
      params: { zpid: zpid },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setReactState((prev) => ({
          ...prev,
          show: true,
          data: res.data,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleClose = () => {
    setReactState((prev) => ({
      ...prev,
      show: false,
    }));
  };
  const handleShow = () => {
    fetchData();
  };

  const formatHomeType = (homeType) => {
    let result = homeType.split("");
    return result
      .map((char) => (char === "_" ? " " : char))
      .join("")
      .toLowerCase();
  };

  return (
    <>
      <ListGroup.Item
        onClick={handleShow}
        as="li"
        className="listingItem d-flex justify-content-between align-items-start"
      >
        <div className="ms-2">
          <div className="fw-bold d-flex">
            {streetAddress}, {city}, {state}, {zipcode}
          </div>
          <div className="fw-light d-flex">
            {bedrooms} bds | {bathrooms} ba | {lotAreaValue} {lotAreaUnit}
          </div>
          <div className="fw-light d-flex">
            Home Type: {formatHomeType(homeType)}
          </div>
        </div>
        {price > 1 ? (
          <Badge bg="primary" pill>
            ${price}
          </Badge>
        ) : (
          ""
        )}
      </ListGroup.Item>
      <ModalContent
        handleClose={handleClose}
        data={reactState.data}
        show={reactState.show}
      />
    </>
  );
}
