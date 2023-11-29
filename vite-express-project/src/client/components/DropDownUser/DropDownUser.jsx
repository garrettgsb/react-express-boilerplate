import React from "react";
import { useAuth } from "../../hooks/AuthContext";
import { useState } from "react";

const DropDownUser = () => {
  const { loggedInUser } = useAuth();
  const [isOpen, setIsopen] = useState(false);

  const toggleDropdown = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-12 h-12 bg-gray-500 text-white rounded-full focus:outline-none"
        style={{
          backgroundImage: `url('http://localhost:3000/images/user_1.jpg')`,
          backgroundPosition: "50% 25%",
          backgroundSize: "300%",
        }}
      ></button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href={`/users/${loggedInUser.id}`}>My Profile</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="/likeditems">My Liked Items</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownUser;
