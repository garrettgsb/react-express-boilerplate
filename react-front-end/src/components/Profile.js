import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

//component to render a profile
const Profile = () => {
  const [profile, setProfile] = useState([]);

  const { userId } = useParams();

  const history = useHistory();

  useEffect(() => {
    axios.get(`/api/users/${userId}/favourites`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
    });
  }, [userId]);

  const deleteFavourite = (favouriteId) => {
    axios.delete(`/api/users/${userId}/favourites/${favouriteId}`).then(() => {
      axios.get(`/api/users/${userId}/favourites`).then((res) => {
        setProfile(res.data);
      });
    });
  };

  const handleClick = (favouriteId) => {
    history.push(`/buildings/${favouriteId}`);
  };

  return (
    <div className="profile-container">
      <h1>Favourites</h1>
      <div className="profile-header">
        {profile.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.address}</p>
            <img
              className="building_amenities-image"
              src={user.image_url}
              alt={user.name}
            />
            <div>
              <button onClick={() => handleClick(user.id)}>
                Building Details
              </button>
              <button onClick={() => deleteFavourite(user.id)}>
                Remove Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
