import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";

const DropDownUser = () => {
  const { isLoggedIn, loggedInUser } = useAuth();
  const [isOpen, setIsopen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoadingPicture, setIsLoadingPicture] = useState(false);
  const user = loggedInUser;

  const toggleDropdown = () => {
    setIsopen(!isOpen);
  };

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        setIsLoadingPicture(true);
        const img = new Image();
        img.onload = () => {
          setProfilePicture(user.profile_picture);
          setIsLoadingPicture(false);
        };
        img.onerror = () => {
          setIsLoadingPicture(false);
        };
        img.src = user.profile_picture;
      } catch (error) {
        console.error("Error loading profile picture:", error);
        setIsLoadingPicture(false);
      }
    };

    if (
      isLoggedIn &&
      user &&
      user.profile_picture &&
      !profilePicture &&
      !isLoadingPicture
    ) {
      fetchProfilePicture();
    }
  }, [isLoggedIn, user, profilePicture, isLoadingPicture]);
  
  const defaultProfilePicture = "../public/images/Default-User.png";

  const profilePictureStyle = {
    backgroundImage: `url(${profilePicture || defaultProfilePicture})`,
    backgroundPosition: "50% 25%",
    backgroundSize: "300%",
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-12 h-12 bg-gray-500 text-white rounded-full focus:outline-none"
        style={profilePictureStyle}
      ></button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={`/users/${loggedInUser.id}`}>My Profile</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={`/likeditems/${loggedInUser.id}`}>My Liked Items</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownUser;
