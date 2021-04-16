import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

//component to render user favourites
export default function FavouriteButton(props) {
  const [favourite, setFavourite] = useState([]);

  // Add or delete favourite
  const handleFav = (buildingId) => {
    const body = { buildingId, user_id: 1 };
    axios.post(`/api/buildings/favourite/${buildingId}`, body).then((res) => {
      if (res.length > 0) {
        setFavourite(favourite);
      } else {
        setFavourite(!favourite);
      }
    });
  };

  return (
    <div className="favourite-button">
      {!favourite && (
        <IconButton
          onClick={() => {
            handleFav(props.buildingId);
          }}
          aria-label="delete"
          color="primary"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <h4> Favourite this property! </h4>
        </IconButton>
      )}
      {favourite && (
        <IconButton
          onClick={() => {
            handleFav(props.buildingId);
          }}
          aria-label="delete"
          color="primary"
        >
          <Favorite></Favorite>
          <h4> Remove from favourites </h4>
        </IconButton>
      )}
    </div>
  );
}
