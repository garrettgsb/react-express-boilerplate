import { useCallback } from "react";
import { useAuth } from "../hooks/AuthContext";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";
import DropDownUser from "./DropDownUser/DropDownUser";

export default function NavBar({ openModal }) {
  const { isLoggedIn, logout, user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleClickLogo = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const menu = [
    { name: "Find Artists", href: "/artists" },
    { name: "Find Gigs", href: "/gigs" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-around p-4">
      <span
        className="font-heading text-4xl whitespace-nowrap cursor-pointer"
        onClick={handleClickLogo}
      >
        LOGO
      </span>
      <div>
        <ul className="flex space-x-6">
          {/* <li>
            <a
              href="/artists"
              className="font-subHeading text-lg font-semibold leading-6 hover:text-primary-content
              uppercase mx-10 transition-all duration-500 before:content-[none] after:content-[none]"
            >
              Find Artists
            </a>
          </li> */}

           <li className="group inline-block relative">
              <button className="inline-flex items-center ">
                <span 
                  className="font-subHeading text-lg font-semibold leading-6 hover:text-primary-content
                  uppercase mx-10 transition-all duration-500 before:content-[none] after:content-[none]">
                  Find Artists
                </span>
              </button>
              <ul className="dropdown-menu absolute hidden text-primary pt-1 mx-5 group-hover:block">
                <li className="">
                  <a className="bg-base-100 font-subHeading font-semibold hover:text-primary-content py-4 px-4 block whitespace-no-wrap" href="/artists">
                    Browse Talents
                  </a>
                </li>
                <li className="">
                  <a className="bg-base-100 font-subHeading font-semibold hover:text-primary-content py-4 px-4 block whitespace-no-wrap" href="/projects/new">
                    Create Posts
                  </a>
                </li>
              </ul>
            </li>

          <li>
            <a
              href="/gigs"
              className="font-subHeading text-lg font-semibold leading-6 hover:text-primary-content
              uppercase mx-10 transition-all duration-500 before:content-[none] after:content-[none]"
            >
              Find Gigs
            </a>
          </li>
        </ul>

        
      </div>
      <div className="flex space-x-4">
        <ThemeController />
        {/* Conditionally render different buttons based on the isLoggedIn state */}
        {isLoggedIn ? (
          <>
          
            <DropDownUser />

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
              onClick={() => document.getElementById("login_modal").showModal()}
              className="btn btn-outline btn-primary hover:text-white"
            >
              Log in
            </button>

            <LoginModal />

            <button className="btn btn-primary text-white" onClick={openModal}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
