import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import UserDetails from "./UserDetails";
import FeaturedPhotos from "./FeaturedPhotos";
import { authContext } from '../../AuthProvider'
import '../../styles/components/_button.scss'
import '../../styles/App.scss';

const Profile = () => {
  const photogData = useContext(authContext)
  console.log('photogData:', photogData)
  const [profileData, setprofileData] = useState(null);
  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/profile/${photogData.user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(setprofileData);
  }, [photogData.user.id]);

  if (!profileData) return null;
  return (
    <>
    <div className="container">
    <h2>{profileData.data.name} ({profileData.data.city})</ h2>
      {profileData.data.bio}
    <div>
      <img src={profileData.data.profile_pic} />
    </div>
    </div>
    <div>
      <img src={profileData.data.photo1_url} />
      <span>{profileData.data.photo1_url_details}</span>
      <img src={profileData.data.photo2_url} />
      <span>{profileData.data.photo2_url_details}</span>
      <img src={profileData.data.photo3_url} />
      <span>{profileData.data.photo3_url_details}</span>

    </div>
    </>
  
  );
};
export default Profile;
