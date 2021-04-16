import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import Favorite from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';

//component to render user favourites
export default function FavouriteButton() {
  const [fav, setFav] = React.useState(false);

  return (
    <div className="favourite-button">
      {fav && (
        <Button
          onClick={() => {
            setFav(!fav);
          }}
          aria-label="delete"
          color="primary"
          variant="outlined"
        >
          <FavoriteBorderIcon></FavoriteBorderIcon>
          Favourite this property!
        </Button>
      )}
      {!fav && (
        <Button
          onClick={() => {
            setFav(!fav);
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
