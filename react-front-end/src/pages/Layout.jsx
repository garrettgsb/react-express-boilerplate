import { AuthContext } from '../App'
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import './styles/app.css'

const Layout = (props) => {

  const user = React.useContext(AuthContext);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;