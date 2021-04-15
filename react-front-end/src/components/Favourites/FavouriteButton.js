import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router-dom";
import axios from "axios";

//component to render user favourites
export default function FavouriteButton() {
  const [fav, setFav] = React.useState(false);

  const { userId } = useParams;

  // Create a favourite
  const createFav = (favouriteId) => {
    axios.post(`/api/users/${userId}/favourites`).then((res) => {
      setFav(res.data);
    });
  };

  // Delete a favourite
  const deleteFav = (favouriteId) => {
    axios.delete(`/api/users/${userId}/favourites/${favouriteId}`).then(() => {
      axios.get(`/api/users/${userId}/favourites`).then((res) => {
        setFav(res.data);
      });
    });
  };

  // determine fav status
  function handleFav(favouriteId) {
    setFav(!fav);
    if (fav == true) {
      createFav(favouriteId);
    } else {
      deleteFav(favouriteId);
    }
  }

  return (
    <div className="favourite-button">
      {fav && (
        <IconButton
          onClick={() => {
            setFav(!fav);
          }}
          aria-label="delete"
          color="primary"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <h4> Favourite this property! </h4>
        </IconButton>
      )}
      {!fav && (
        <IconButton
          onClick={() => {
            setFav(!fav);
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
