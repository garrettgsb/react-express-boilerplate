import React from "react";
import './styles/home.css';
import { Link } from "react-router-dom";

export default function LoginPage(props) {

  //Submit Button: onClick, make API Call then on success, props.setToken

  return (
    <main className="main_page">
      <section className="main_section">
          <form>
            <label>
              <p>Username:</p>
              <input type="text" />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" />
            </label>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
      </section>
    </main>
  );
}