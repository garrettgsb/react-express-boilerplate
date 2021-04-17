import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

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
          <div key={favourite.id}>
            <h2>{favourite.name}</h2>
            <p>{favourite.address}</p>
            <img
              className="building_amenities-image"
              src={favourite.image_url}
              alt={favourite.name}
            />
            <div>
              <button onClick={() => handleClick(favourite.building_id)}>
                Building Details
              </button>
              <button onClick={() => deleteFavourite(favourite.id)}>
                Remove Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
