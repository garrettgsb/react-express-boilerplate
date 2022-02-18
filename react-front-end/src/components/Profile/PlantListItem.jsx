import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

export default function PlantListItem({ user_id, id, scientificName, commonName, photo, description, nickname, plant_since }) {

  // console.log('user_id', user_id);
  console.log('id!!!!', id);

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
      <Image
        src={photo}
        size="medium"
        centered
      />
      <Card.Content>
        <div className="header">{commonName}</div>
        <div className="meta">{scientificName}</div>
        <div className="meta">"{nickname}"</div>
        <div className="meta">
          <span className="date">Plant Since {(plant_since).split('-')[0]}</span>
        </div>
        <div className="description">{description}</div>
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