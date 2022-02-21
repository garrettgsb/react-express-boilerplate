import React, { useState } from "react";
import { Button, Image } from "semantic-ui-react";
import "./index.css";
import flying_bee from "./assets/flying_bee.png";
import LoginForm from "./components/LoginForm";

export default function Home({ login, user }) {
  const [isVisibleLogin, setIsVisibleLogin] = useState(false);

  return (
    <main className="home">
      <Image src={flying_bee} size="large" id="bee" />

      {isVisibleLogin && <LoginForm login={login} user={user} />}

      <h2 id="style-2" data-replace="Welcome to beleaf">
        Welcome to beleaf
        <Button inverted color="olive" size="huge" onClick={() => setIsVisibleLogin(true)}>
          Let's Grow
        </Button>
      </h2>
    </main>
  );
}
