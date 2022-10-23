import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";

ReactDOM.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
  document.getElementById("root")
);


