import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";

//component to render user favourites
export default function FavouritesButton() {
  const [fav, setFav] = React.useState(false);

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
        </IconButton>
      )}
    </div>
  );
}
