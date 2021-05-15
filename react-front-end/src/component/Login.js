import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <div>
      <h1>The login page</h1>
      <Link
        to="/"
        onClick={() => {
          props.onLogin(1);
        }}
        style={{ textDecoration: "none", color: "lavender" }}
      >
        <button>login</button>
      </Link>
    </div>
  );
}
