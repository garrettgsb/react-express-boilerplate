import React, { useState } from "react";
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
          props.setLoggedIn(false);
        } else {
          setUsername('');
          setPassword('');
          props.setLoggedIn(true);
        }
      })
      .catch((error) => console.log('err:', error));
  };

  return (
    <div className="flex flex-col h-full">

      <div className="login-hero gird items-center">
        <div className="img-container">
          <img src="https://media.istockphoto.com/photos/loving-couple-on-the-seashore-happy-valentines-day-picture-id1290253065?k=20&m=1290253065&s=612x612&w=0&h=zz7C8qIsECPkmF0Tgo3EIOdQ91tbERXaOGuaSli3YLM=" alt='' className="w-full h-full rounded-xl drop-shadow-2xl" />
        </div>

        <form className="login-form bg-white drop-shadow px-8 pt-6 pb-8 mb-4 mix-blend-normal">
          <div className="form-inner bg-white">
            <h1 className="text-center mb-5 font-bold text-xl mt-10 bg-white">Keen</h1>
            {/* error msg */}
            <div className="mb-3 pt-3 bg-white">
              <input
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                type="text"
                placeholder="Username/Email"
                className="px-1 py-1 w-full bg-gray text-black placeholder-slate-700 rounded-sm border border-gray-300 sm:text-xs focus:ring-fuchsia-800 focus:border-fuchsia-800" />

              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="px-1 py-1 mt-3 w-full bg-gray text-black placeholder-slate-700 rounded-sm border border-gray-300 sm:text-xs focus:ring-fuchsia-800 focus:border-fuchsia-800" />
            </div>

            <div className="mb-3 pt-3 bg-white">
              <button onClick={handleClickLogIn} type="submit" className="px-1 py-1 w-full bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-bold rounded-sm">
                Log In
              </button>

              <p className="sm:text-xs bg-white text-gray-600 text-right mt-3 border-b-2 pb-6">Forgot Password?</p>

              <div className="flex mt-7 justify-center bg-white">
                <p className="sm:text-xs text-slate-900 pr-1">Don't have an account?</p>
                <p className="sm:text-xs text-fuchsia-800">Sign up</p>
              </div>
            </div>
          </div>
        </form>

        <div className="creators flex flex-col">

          <p className="text-md font-bold flex justify-center mb-5">Created By</p>

          <div className='flex justify-center'>
            <div className="flex items-center mx-10">
              <div className='w-5 mr-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' className="w-full"></img>
              </div>
              <div className='flex flex-col'>
                <p>Ava K</p>
                <a href="https://github.com/avacadok" className="hover:text-fuchsia-800 text-gray-600">avacadok</a>
              </div>
            </div>

            <div className="flex items-center mx-20">
              <div className='w-5 mr-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' className="w-full"></img>
              </div>
              <div className='flex flex-col'>
                <p>Denis K</p>
                <a href="https://github.com/ukflava" className="hover:text-fuchsia-800 text-gray-600">ukflava</a>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <div className='w-5 mr-3'>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' className="w-full"></img>
              </div>
              <div className='flex flex-col'>
                <p>Phil Y</p>
                <a href="https://github.com/josemourinho333" className="hover:text-fuchsia-800 text-gray-600">josemourinho333</a>
              </div>
            </div>
          </div>
        </div>        
      </div>

    </div>
  )
}

export default LoginForm; 