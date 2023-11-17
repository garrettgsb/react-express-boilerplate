// const user = {
//   id: 1,
//   username: "John123",
//   name: "John Smith",
//   email: "test@test.com",
//   bio: "I find inspiration in the simplest moments of life,translating them into captivating visuals that tell unique stories. My journey as an artist is a continuous exploration of new techniques and expressions, driven by a deep love for the craft.",
//   rate: 5000,
//   profile_picture:"./public/images/user_1.jpg",
//   location: "Saanich",
//   images: ["./public/images/art_1.jpg",
//            "./public/images/art_2.jpg",
//            "./public/images/art_3.jpg",
//            "./public/images/art_4.jpg",
//            "./public/images/art_5.jpg",
//            "./public/images/art_6.jpg"
//           ],
// };

// above is mock data
// data will be fetched from /api/users/${userId]}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function convertRate(cents) {
  const dollars = cents / 100;
  return dollars.toFixed(2);
}

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setUser(data[0]);
        console.log(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }
  , [id]);

 



  return(
    
    <div className="m-10 flex flex-col justify-center">
      <header className="font-subHeading text-xl text-accent flex justify-between p-5">
          My Profile
        <button className="font-subHeading bg-button hover:bg-buttonHover text-white text-lg font-bold py-1 px-4 rounded">
          Edit
        </button>
      </header>

      <main className="flex justify-center">
        <div className="m-5 w-80 h-80 overflow-hidden border border-gray-300 drop-shadow-3xl rounded-3xl">
          <img
            src={user.profile_picture}
            alt={`${user.username} profile image`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-80 grid grid-cols-1 content-around">
          <h2 className="font-heading text-3xl">{user.name} {console.log(user)}</h2>
          <p className="text-textSecondary">
            {user.bio}
          </p>
          <span className="text-accent">Rate: ${convertRate(user.wage)} / hour</span>
        </div>        
      </main>
        

      <h2 className="font-heading text-2xl m-5 pt-5">My Projects</h2>
      {/* <div className="carousel rounded-box">  
        {user.images.map((image, index) => (
            <div className="carousel-item">
              <img key={index} src={image} alt={`Image ${index + 1}`} className="w-72 h-72" />
            </div>
          ))}
      </div> */}

    </div>
  )
}