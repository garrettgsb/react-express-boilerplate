import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
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
        <Button
          onClick={() => {
            handleFav(props.buildingId);
          }}
          aria-label="delete"
          color="primary"
          variant="outlined"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
          Favourite this property!
        </Button>
      )}
      {favourite && (
        <Button
          onClick={() => {
            handleFav(props.buildingId);
          }}
          aria-label="delete"
          color="primary"
          variant="outlined"
        >
          <Favorite></Favorite>
          Remove from favourite
        </Button>
      )}
    </div>
  );
}
