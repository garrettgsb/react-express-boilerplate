import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { authContext } from '../../AuthProvider';
import '../../styles/components/_button.scss';
import '../../styles/App.scss';
import './Profile.scss';

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
  console.log(profileData.data.photo1_url)
  return (
    <div className='profile-container'>
      <div className='Card'>
        <div className='upper-container'>
          <div>
            <img className='image-container' src={profileData.data.profile_pic} alt='' height='100px' width='100px' />
          </div>
        </div>
        <div className='lower-container'>
          <h2> { profileData.data.name } </h2>
          <h4> City: { profileData.data.city } </h4>
          <p> { profileData.data.bio } </p>
          <button className='btn'>Edit Profile</button>
        </div>
      </div>
      <div className='photo-album'>
        <div className='photo-container'>
          <img src={profileData.data.photo1_url} />
          <span>{profileData.data.photo1_url_details}</span>
        </div>
        <div className='photo-container'>
          <img src={profileData.data.photo2_url} />
          <span>{profileData.data.photo2_url_details}</span>
        </div>
        <div className='photo-container'>
          <img src={profileData.data.photo3_url} />
          <span>{profileData.data.photo3_url_details}</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;