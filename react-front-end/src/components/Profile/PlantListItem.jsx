import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function PlantListItem({ user_id, plant_id, scientificName, commonName, photo, description, nickname }) {

  console.log('user_id', user_id);
  console.log('plant_id', plant_id);

  const [state, setState] = useState({
    wishlist_user_id: user_id,
    plant_id: plant_id
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
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src={photo} alt="plant" />
        </div>
        <div className="content">
          <div className="header">{commonName}</div>
          <div className="meta">{scientificName}</div>
          <div className="meta"><i>"{nickname}"</i></div>
          <div className="description">
            {description}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <Link to={`/plants/${plant_id}`}>
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
                  plant_id: plant_id
                },
              }));
            }}><i className="like icon"></i>Add to Wishlist</button>
          </span>
        </div>
      </div>
    </div>
  )
}