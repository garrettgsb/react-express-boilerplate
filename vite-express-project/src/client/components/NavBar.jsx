import { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function NavBar({ openModal }) {
const { isLoggedIn, login, logout, user } = useAuth();
  // console.log(isLoggedIn, user);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menu = [
    { name: "Find Artists", href: "/artists" },
    { name: "Find Gigs", href: "/gigs" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-around p-4">
      <span className="font-heading text-4xl whitespace-nowrap">LOGO</span>
      <div>
        <ul className="flex space-x-6">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-subHeading text-lg font-semibold leading-6 hover:text-primary-content
              uppercase mx-10 transition-all duration-500 before:content-[none] after:content-[none]"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <ThemeController />
        {/* Conditionally render different buttons based on the isLoggedIn state */}
        {isLoggedIn ? (
          <>
            {/* When the user is logged in */}
            <button>MY Profile</button>
            <button
              onClick={() => handleLogout()}
              className="btn btn-outline btn-primary"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* When the user is NOT logged in */}
            <button
              onClick={()=>document.getElementById('login_modal').showModal()}
              className="btn btn-outline btn-primary hover:text-white"
            >
              Log in
            </button>

            <LoginModal />
          
            <button
              className="btn btn-primary text-white"
              onClick={openModal}
            >
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
