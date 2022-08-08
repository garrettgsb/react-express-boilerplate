import {React, useState} from "react";
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import Axios from "axios";

export default function Nav() {
  
  return (
    <div className="grid content-center shadow-xl h-20 border-b big-white sticky top-0 z-50 ">
              
        <div className="flex justify-between content-center space-x-4">
        <div className="Vwhite-text text-4xl ml-10 myfont text-left cursor-pointer hover:text-fuchsia-700">KEEN</div>
        <div className="flex space-x-6 mr-10">
        <HeartIcon className="h-10 cursor-pointer rounded-full shadow-sm hover:text-fuchsia-700" />
        <BellIcon className="h-10 cursor-pointer rounded-full hover:text-fuchsia-700" />
        <UserCircleIcon className="h-10 cursor-pointer rounded-full hover:text-fuchsia-700" />

        <button type="button" className="flex text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        <img className="w-10 h-10 rounded-full" src="https://www.w3schools.com/howto/img_avatar.png" alt="user photo" />
      </button>

        <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>



        </div>
        </div>
        // </div>
  );
}

