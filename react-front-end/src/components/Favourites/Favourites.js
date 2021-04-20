import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },

//   starRating: {
//     fill: "#61dafb",
//   },
// }));

//component to render favourites
const Favourites = () => {
  const [fav, setFavourite] = useState([]);

  const { userId } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/users/${userId}/favourites`).then((res) => {
      setFavourite(res.data);
    });
  }, [userId]);

  const handleClick = (favouriteId) => {
    history.push(`/buildings/${favouriteId}`);
  };

  // Delete a favourite
  const deleteFavourite = (favouriteId) => {
    axios.delete(`/api/users/1/favourites/${favouriteId}`).then(() => {
      axios.get(`/api/users/${userId}/favourites`).then((res) => {
        setFavourite(res.data);
      });
    });
  };

  return (
    <div className="favourites-container">
      <div className="favourites-header">
        {fav.map((favourite) => (
          <Card className="favourites-item" key={favourite.id}>
            <img
              className="favourites-image"
              src={favourite.image_url}
              alt={favourite.name}
            />
            <div className="favourites-content">
              <h2>{favourite.name}</h2>
              <p>{favourite.address}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleClick(favourite.building_id)}
              >
                Building Details
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteFavourite(favourite.id)}
              >
                Remove Favourite
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
