import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";

ReactDOM.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
