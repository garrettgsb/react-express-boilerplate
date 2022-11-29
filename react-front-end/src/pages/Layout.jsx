import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../components/nav";
import './styles/app.css'
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;