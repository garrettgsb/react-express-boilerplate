import React, { useState } from "react";
import Login from "./Login";

export default function LoginForm(){

  const testUser = {
    email: "test@test.com",
    password: "test",
  };

const [user, setUser] = useState({ name: "", email: "" });
// const [error, setError] = useState("");

const userLogin = function(loginInfo) {
  console.log("Login!");

  if (loginInfo.email === testUser.email && loginInfo.password === testUser.password) {
  console.log("Logged in!");
  setUser({
    email: loginInfo.email
  });
} else {
  console.log("Wrong username or password!")
  }
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



