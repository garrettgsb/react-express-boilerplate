import {React, useState} from "react";
import { HomeIcon, ChatAlt2Icon, AdjustmentsIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Nav(props) {
  let user;
  const [open, setOpen] = useState(false);

  props.user? user = props.user : user = {Name: "", email : "", profile_photo: "" }
  
  return (
    <div className="nav-bar grid drop-shadow border-b big-white sticky top-0 z-50 py-3">
              
      <div className="flex justify-between content-center space-x-4">
        <div className="text-3xl myfont text-left cursor-pointer hover:text-[#8A00A0]">
          KEEN
        </div>

        <div className="flex items-center">
          <Link to='/'>
          <HomeIcon className="mx-5 h-7 cursor-pointer rounded-full hover:text-[#8A00A0] hover:bg-gray-100" />
          </Link>

          <Link to='/matches'>
          <ChatAlt2Icon className="mx-5 h-7 cursor-pointer rounded-full hover:text-[#8A00A0] hover:bg-gray-100" />
          </Link>

          <Link to='/preferences'>
          <AdjustmentsIcon className="mx-5 h-7 cursor-pointer rounded-full hover:text-[#8A00A0] hover:bg-gray-100 " />
          </Link>

          <button className="mx-5 dropdown-relative" type="button" onClick={() =>{setOpen(!open)}}>
            <img className="w-7 h-7 rounded-full" src={user ? user.profile_photo : ''} alt="thumbnail"/>
          </button>

          <div>
            { open 
              ? 
              (<div onMouseLeave={() => setOpen(false)} className="absolute top-[58px] right-[100px] dropdown-toggle min-w-max items-right bg-white text-base z-50 float-right py-2 list-none text-down rounded-lg drop-shadow-lg mt-1 mr-50 bg-clip-padding border-none ">

              <div className="pt-2 px-4">
                <span className="block text-sm text-gray-900">
                  {user.name}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate">
                  {user.email}
                </span>
              </div>

              <div className="h-3 border-b-2 mb-2 border-gray-300 text-2xl w-11/12 m-auto place-self-center">
              </div>

              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <Link to='/'>
                    <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Home</p>
                  </Link>
                </li>
                <li>
                  <Link to='/profile'>
                    <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Profile</p>
                  </Link>
                </li>
                <li>
                  <Link to='/preferences'>
                    <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Preferences</p>
                  </Link>
                </li>

                <div className="h-2 border-b-2 mb-2 border-gray-300 text-2xl w-11/12 m-auto place-self-center">
                </div>

                <li> 
                  <button onClick={props.handleClickLogOut} className='w-full text-left'>
                    <p className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">
                      Sign out
                    </p>
                  </button>
                </li>
              </ul>
          </div> ) 
          
          : (<p></p>) } </div>

        </div>
      </div>
    </div>
  );
}

