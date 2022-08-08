import {React, useEffect, useState} from "react";
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";


// color ------------------------- #8A00A0
// Kept dropdown in this 

export default function Nav(props) {
  const [open, setOpen] = useState(false)
  let user
  console.log(user)
  // useEffect(() =>{
  //   const user = props.state.user[0]
  // },[])
  props.state.user? user = props.state.user[0] : user = {Name: "", email : "", profile_photo: "" }
  
  console.log(user)
  return (
  
    <div onBlur={
      console.log("dddddd")} className="grid content-center shadow-xl h-20 border-b big-white sticky top-0 z-50 ">
              
        <div className="flex justify-between content-center space-x-4">
        <div className="Vwhite-text text-4xl ml-10 myfont text-left cursor-pointer hover:text-[#8A00A0]">KEEN</div>
        <div className="flex space-x-6 mr-10">
        <HeartIcon className="h-10 cursor-pointer rounded-full shadow-sm hover:text-[#8A00A0]" />
        <BellIcon className="h-10 cursor-pointer rounded-full hover:text-[#8A00A0]" />
        <UserCircleIcon className="h-10 cursor-pointer rounded-full hover:text-[#8A00A0] " />

        <button className="dropdown-relative" type="button" onClick={() =>{setOpen(!open)}}>
        <img className="w-10 h-10 rounded-full" src={user.profile_photo} alt="user photo" />
        </button>

<div>{open ? (<div  className="fixed top-20 right-5  dropdown-toggle min-w-max items-right bg-white text-base z-50 float-right
                        py-2 list-none text-down rounded-lg shadow-lg mt-1 mr-50 bg-clip-padding border-none ">
        <div className="py-3 px-4 ">
          <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="/" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Home</a>
          </li>
          <li>
            <a href="/settings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Settings</a>
          </li>
          <li>
            <a href="/preferences" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Preferences</a>
          </li>
          <li>
            <a href="/logout" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">Sign out</a>
          </li>
        </ul>
      </div>) : (<p></p>)}</div>

        </div>
        </div>
        </div>
  );
}

