import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router-dom";
import axios from "axios";

//component to render user favourites
export default function FavouriteButton() {
  const [favourite, setFavourite] = useState();

  const { userId } = useParams();
  console.log("userID:", userId);

  // Create a favourite
  const createFav = () => {
    axios.post(`/api/users/1/favourites`).then((res) => {
      setFavourite(res.data);
    });
  };

  // Delete a favourite
  const deleteFav = (favouriteId) => {
    axios
      .delete(`/api/users/${userId}/favourites/${favouriteId}`)
      .then((res) => {
        setFavourite(res.data);
      });
  };

  function handleFav(favouriteId) {
    setFavourite(!favourite);
    if (favourite === true) {
      createFav();
    } else {
      deleteFav(favouriteId);
    }
  }

  return (
    <div className="favourite-button">
      {favourite && (
        <IconButton
          onClick={() => {
            setFavourite(!favourite);
          }}
          aria-label="delete"
          color="primary"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <h4> Favourite this property! </h4>
        </IconButton>
      )}
      {!favourite && (
        <IconButton
          onClick={() => {
            setFavourite(!favourite);
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
