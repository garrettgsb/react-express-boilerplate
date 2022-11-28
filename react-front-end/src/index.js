import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Program from "./pages/Program";
import Workout from "./pages/Workout";
import Exercise from "./pages/Exercise";


import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/program/:id",
        element: <Program />,
      },
      {
        path: "/workout",
        element: <Workout />,
      },
      {
        path: "/exercise",
        element: <Exercise />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
