import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

function convertRate(cents) {
  const dollars = cents / 100;
  return dollars.toFixed(2);
}

export default function UserProfile() {
  const { id } = useParams();
  const { isLoggedIn, user, setUser } = useAuth();

  useEffect(() => {
    console.log("Fetching user data for id:", id);
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          console.error(`Failed to fetch user with id ${id}`);
          return;
        }

        const data = await response.json();
        if (data.length === 0) {
          console.error(`No user found with id ${id}`);
          return;
        }

        setUser(data[0]);
        console.log("User data:", data[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id, setUser]);
  useEffect(() => {
    console.log('From useEffect', user);

  })

  // Display loading when data fetching is happening
  if (!user) {
    console.error("User object is undefined or missing id property");
    return (
      <>
        <p>Loading</p>
        <span className="loading loading-spinner loading-lg"></span>
      </>
    );
  }

  return (
    <div className="m-10 flex flex-col justify-center">
      {/* only when the logged in user's id match the id in the endpoin it will display the edit button */}
      {isLoggedIn && user && (
      <header className="font-subHeading text-xl text-accent flex justify-between px-5 py-10">
          My Profile
        <button className="font-subHeading bg-button hover:bg-buttonHover text-white text-lg font-bold py-1 px-4 rounded">
          Edit
        </button>
      </header>
      )}

      <main className="flex justify-center">
        <div className="m-5 w-80 h-80 overflow-hidden border border-gray-300 drop-shadow-3xl rounded-3xl">
          <img
            src={user.profile_picture}
            alt={`${user.username} profile image`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-80 grid grid-cols-1 content-around">
          <h2 className="font-heading text-3xl">{user.name}</h2>
          <p className="text-textSecondary">{user.bio}</p>
          <span className="text-accent">
            Rate: ${convertRate(user.wage)} / hour
          </span>
        </div>
      </main>

      <h2 className="font-heading text-2xl m-5 pt-5">My Projects</h2>

      <div className="carousel rounded-box">
        {user && user.images.map((image, index) => (
          <div className="carousel-item" key={image}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-72 h-72"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
