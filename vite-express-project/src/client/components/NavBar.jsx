import { useState } from "react";
import { useAuth } from "../hooks/AuthContext";

export default function NavBar({ openModal }) {
const { isLoggedIn, login, logout } = useAuth();

  const navigation = [
    { name: "Find Artists", href: "#" },
    { name: "Find Gigs", href: "#" },
  ];

  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pb-1.5 h-10">
      
      
      <span className="font-heading text-4xl whitespace-nowrap">LOGO</span>
      <div>
        <ul className="flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-subHeading text-lg font-semibold leading-6 text-accent hover:text-accentHover"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        {/* Conditionally render different buttons based on the isLoggedIn state */}
        {isLoggedIn ? (
          <>
            {/* When the user is logged in */}
            <button>MY Profile</button>
            <button
              onClick={() => logout()}
              className="font-subHeading bg-transparent hover:bg-buttonHover text-button font-semibold hover:text-white py-2 px-4 border border-button hover:border-transparent rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* When the user is NOT logged in */}
            <button
              onClick={()=>document.getElementById('login_modal').showModal()}
              className="font-subHeading bg-transparent hover:bg-buttonHover text-button font-semibold hover:text-white py-2 px-4 border border-button hover:border-transparent rounded"
            >
              Log in
            </button>

            {/* Login Modal */}
            <dialog id="login_modal" className="modal">
              <div className="modal-box flex flex-col items-center justify-center">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg font-heading">Welcome Back!</h3>
                <div className="form-control w-full max-w-xs m-4">
                  <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs m-4">
                  <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                </div>
                <button
                  onClick={() => login()}
                  className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-sm"
                >
                  Log in
                </button>
              </div>
            </dialog>
          
            <button
              className="font-subHeading bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded"
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
