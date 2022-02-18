import React from "react";
import {Image} from "semantic-ui-react";
import './index.css';
import flying_bee from "./assets/flying_bee.png"

export default function Home() {
  return (
   <main className="home" > 
    
      <h2 id="style-2" data-replace="Welcome to beleaf">Welcome to beleaf</h2><span></span>
      <Image src={flying_bee} size="large" id="bee"/>
    </main>
  
  );
}