import React, { useState } from "react";
import Login from "./Login";
import Axios from "axios";

export default function LoginForm(){

  const testUser = {
    email: "test@test.com",
    password: "test",
  };

const [user, setUser] = useState({ name: "", email: "" });
// const [error, setError] = useState("");

const userLogin = function(loginInfo) {
  console.log("Login!");

  const data = {
    email: loginInfo.email,
    password: loginInfo.password
  }

  Axios.post("/login", data)
    .then((res) => {
      setUser({name: res.data.name, email: res.data.email})
    })
    .catch((err) => {
      console.log(err);
    })

}

const logout = () => {
  setUser({ email: "" });
}; 

return (

<div className="App">
        {(user.email !== "") ? (
          <div>
            <h2>Welcome, <span>{user.email}</span></h2>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Login userLogin={userLogin} />
        )}
</div>
);
}



