import React, { useState }from "react";
import axios from 'axios';

function LoginForm(props) {
  // LOGIN AND SIGNOUT - everything in here will likely need to be moved to login page when we start working on front end
  // DISCUSS: either keep pw as strings or implement bcrpyt later on
  // initial state of these empty string
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogIn = (e) => {
    // prevent default action of a button type = submit 
    e.preventDefault();
    axios.post('/login', { username, password })
      .then((response) => {
        if (!response.data) {
          // do error alert
          console.log('no login msg', response);
        } else {
          setUsername('');
          setPassword('');

        }
      })
      .catch((error) => console.log('err:', error));
  };
  /// End of login and signout stuff

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <form className="bg-white drop-shadow px-8 pt-6 pb-8 mb-4">
        <div className="form-inner">
          <h1 className="text-center mb-5 font-bold text-xl mt-10">Keen</h1>
          {/* error msg */}
          <div className="mb-3 pt-3">
            <input 
            onChange={(event) => setUsername(event.target.value)}
            type="text" 
            placeholder="Username/Email" 
            className="px-1 py-1 w-full placeholder-slate-700 bg-gray-50 rounded-sm border border-gray-300 sm:text-xs focus:ring-fuchsia-800 focus:border-fuchsia-800 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-800 dark:focus:border-fuchsia-800" />

            <input
            onChange={(event) => setPassword(event.target.value)}
            type="text" 
            placeholder="Password" 
            className="px-1 py-1 mt-3 w-full placeholder-slate-700 bg-gray-50 rounded-sm border border-gray-300 sm:text-xs focus:ring-fuchsia-800 focus:border-fuchsia-800 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-fuchsia-800 dark:focus:border-fuchsia-800" />
          </div>

          <div className="mb-3 pt-3">
            <button onClick={() => handleClickLogIn(username, password)} className="px-1 py-1 w-full bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-bold rounded-sm">
              Log In
            </button>

            <p className="sm:text-xs text-gray-600 text-right mt-3 border-b-2 pb-6">Forgot Password?</p>

            <div className="flex mt-7 justify-center">

              <p className="sm:text-xs text-slate-900 pr-1">Don't have an account?</p>
              <p className="sm:text-xs text-fuchsia-800">Sign up</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm; 