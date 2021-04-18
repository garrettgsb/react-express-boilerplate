import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import UserDetails from "./UserDetails";
import FeaturedPhotos from "./FeaturedPhotos";

const Profile = ({ id = 4 }) => {
  const [profileData, setprofileData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/profile/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(setprofileData);
  }, [id]);

  const login = function (email, password) {
    axios.post('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: JSON.stringify({email: email, password: password})
      // credentials: JSON.stringify(credentials)
    })
      .then((data) => { 
        console.log(data)
        if(data.data === '') {
        alert('Sorry, the email or password is not valid')
      } else {
        console.log('All good')
        setUser({ email, id});
        setAuth(true);
      }
    })
  }

  console.log("profileData: ", profileData);
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
