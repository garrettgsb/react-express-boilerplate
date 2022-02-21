import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

export default function PlantListItem({ user_id, id, scientificName, commonName, photo, description, nickname, plant_since }) {

  const [state, setState] = useState({
    wishlist_user_id: user_id,
    plant_id: id
  })

  const addWishlistPlant = (wishlist_user_id, plant_id) => {
    axios
      .post("/api/wishlist", {
        wishlist_user_id: wishlist_user_id,
        plant_id: plant_id
      })
      .then(function (response) {
        console.log("Post made to db!", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Card compact>
      <Card.Content centered>
      <div className="plant-header">
        <Image
          src={photo}
          floated='left'
          size='small'
        />
        <div className="plant-name">
          <Card.Header>{commonName}</Card.Header>
          <Card.Meta>{scientificName}</Card.Meta>
          <Card.Meta><b>"{nickname}"</b></Card.Meta>
          <Card.Meta>Plant Since {(plant_since).split('-')[0]}</Card.Meta>
        </div>
      </div>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content>
        <span className="right floated">
          <Link to={`/plants/${id && id}`}>
            <button className="ui button">See Info</button>
          </Link>
        </span>
        <span className="left floated">
          <button className="ui button" onClick={() => {
            addWishlistPlant(state.wishlist_user_id, state.plant_id);

            setState((prev) => ({
              ...prev,
              wishlist: {
                wishlist_user_id: user_id,
                plant_id: id
              },
            }));
          }}><i className="like icon"></i>Add to Wishlist</button>
        </span>
      </Card.Content>
    </Card>
  )
}