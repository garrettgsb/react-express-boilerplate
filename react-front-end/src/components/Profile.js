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

  const handleClick = () => {
    history.push("/map");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        {profile.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.address}</p>
            <img
              className="building_amenities-image"
              src={user.image_url}
              alt={user.name}
            />
          </div>
        ))}
        <button onClick={handleClick}>Go to the Map page</button>
      </div>
    </div>
  );
};

export default Profile;
