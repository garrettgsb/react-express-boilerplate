import React, { useState } from "react";
import axios from "axios";
import MenuAppBar from "./navbar";

const Register = (props) => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nameReg, setNameReg] = useState("");

  const reg = () => {
    console.log("test", nameReg);
    axios
      .post("http://localhost:3002/api/users/register", {
        name: nameReg,
        username: usernameReg,
        password: passwordReg,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <MenuAppBar />
      <div className="Register">
        <div className="RegisterBox">
          <div className="RegisterForm">
            <h2 className="Title">Register</h2>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => {
                setNameReg(e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            ></input>
            <input
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            ></input>
            <button onClick={reg}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
