import React from "react";

function LoginForm() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="form-inner">
          <h2 className="text-center mb-4 font-bold">Keen</h2>
          {/* error msg */}
          <div className="mb-3 pt-3">
            {/* <input type="text" placeholder="Username/Email" className="px-2 py-1 placeholder-slate-800 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />

            <input type="text" placeholder="Password" className="px-2 py-1 placeholder-slate-800 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" /> */}

            <input type="text" placeholder="Username/Email" class="px-2 py-1 w-full placeholder-slate-800 text-gray-900 bg-gray-50 rounded border border-gray-300 sm:text-xs focus:ring-purple-800 focus:border-purple-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-800 dark:focus:border-purple-800"></input>

            <input type="text" placeholder="Password" class="px-2 py-1 w-full placeholder-slate-800 text-gray-900 bg-gray-50 rounded border border-gray-300 sm:text-xs focus:ring-purple-800 focus:border-purple-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-800 dark:focus:border-purple-800"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm; 