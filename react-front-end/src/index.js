import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./components/UserContext";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <UserProvider> 
      <App />
    </UserProvider>
  </BrowserRouter>,
  rootElement
);