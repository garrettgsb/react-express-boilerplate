import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/components/_button.scss';
import '../../styles/App.scss';
import './PhotogsProfile.scss';


const PhotogsProfile = () => {
  
  return (
    <div className='profile-container'>
      <div className='Card'>
        <div className='upper-container'>
          <div>
            <img className='image-container' src='https://www.desicomments.com/wp-content/uploads/2017/02/Betty-Boop-Holding-Camera.jpg' alt='' height='100px' width='100px' />
          </div>
        </div>
        <div className='lower-container'>
          <h2> Betty Boop </h2>
          <h4> City: Calgary </h4>
          <p> My name is Betty and I am fairly new to photography. I would love to tag along with some more experinced photographers and get some pointers! I would much prefer to meetup in a group of at least 3 people to ensure that we have a safe and enjoyable time. </p>
          <Link className='back-link' to="/meetups"> Back </Link>
        </div>
      </div>
      <div className='photo-album'>
        <div className='photo-container'>
          <img src='https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
          <span>Camera Settings: f2.8 - 10 sec - ISO1600</span>
        </div>
        <div className='photo-container'>
          <img src='https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
          <span>Camera Settings: f4 - 15 sec - ISO1600</span>
        </div>
        <div className='photo-container'>
          <img src='https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60' />
          <span>Camera Settings: f2.8 - 8 sec - ISO3200</span>
        </div>
      </div>
    </div>
  );
};
export default PhotogsProfile;