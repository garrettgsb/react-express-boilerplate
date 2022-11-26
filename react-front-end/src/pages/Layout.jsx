import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../components/nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;