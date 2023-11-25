import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { useUserProfile } from "../hooks/useUserProfile";

function convertRate(cents) {
  const dollars = cents / 100;
  return dollars.toFixed(2);
}

export default function UserProfile() {
  const { id } = useParams();
  const { isLoggedIn, user, setUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const { fetchUser, updateUser } = useUserProfile(id, setUser);

  // Move to useUserProfile hook
  // useEffect(() => {
  //   // console.log("Fetching user data for id:", id);
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch(`/api/users/${id}`);
  //       if (!response.ok) {
  //         console.error(`Failed to fetch user with id ${id}`);
  //         return;
  //       }

  //       const data = await response.json();
  //       if (data.length === 0) {
  //         console.error(`No user found with id ${id}`);
  //         return;
  //       }

  //       setUser(data[0]);
  //       // console.log("User data:", data[0]);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };
  //   fetchUser();
  // }, [id, setUser]);

  useUserProfile(id, setUser);

  const handleEditSubmit = async () => {
    try {
      const updatedData = {
        name: editedUser.name || user.name,
        bio: editedUser.bio || user.bio,
        wage: editedUser.wage || user.wage,
        profile_picture: editedUser.profile_picture || user.profile_picture,
      };

      await updateUser(updatedData);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  if (!user) {
    console.warn("Loading");
    return (
      <>
        <p className="font-subHeading text-3xl">Loading</p>
        <span className="loading loading-spinner loading-lg"></span>
      </>
    );
  }

  return (
    <div className="m-10 flex flex-col justify-center">
      {isLoggedIn && user && (
        <header className="font-subHeading text-xl text-accent flex justify-between px-5 py-10">
          My Profile
          <button
            className="font-subHeading bg-button hover:bg-buttonHover text-white text-lg font-bold py-1 px-4 rounded"
            onClick={() => {
              setEditing(true);
            }}
          >
            Edit
          </button>
        </header>
      )}

      <main className="flex justify-center">
        {/* Edit view is rendered only when 'editing' is true */}
        {editing && (
          <div className="w-80 grid grid-cols-1 content-around">
            <h1 className="font-subHeading text-xl text-accent">
              Edit your profile
            </h1>
            <br />
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={editedUser.name || user.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
            <label
              htmlFor="Bio"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Bio
            </label>
            <textarea
              name="bio"
              value={editedUser.bio || user.bio}
              placeholder="Bio"
              onChange={handleInputChange}
              className="h-60"
            ></textarea>
            <label
              htmlFor="wage"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              How Much You Charge Per Hour
            </label>
            <input
              type="number"
              name="wage"
              value={editedUser.wage || convertRate(user.wage)}
              placeholder="Wage"
              onChange={handleInputChange}
            />
            <button
              className="font-subHeading bg-button hover:bg-buttonHover text-white text-lg font-bold py-1 px-4 rounded"
              onClick={handleEditSubmit}
            >
              Save
            </button>
          </div>
        )}

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
        {user &&
          user.images.map((image, index) => (
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
