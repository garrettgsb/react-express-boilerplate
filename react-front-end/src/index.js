import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";
require("dotenv").config();
console.log(process.env);
// const mailgun = require("mailgun-js");
// const DOMAIN = process.env.DOMAIN_MAILGUN;
// console.log(process.env.API_KEY_MAILGUN)
// const mg = mailgun({
//   apiKey: process.env.API_KEY_MAILGUN,
//   domain: DOMAIN,
// });



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
