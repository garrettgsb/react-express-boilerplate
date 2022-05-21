import React from "react";
import "./Location.scss";
import { useState } from "react";
import axios from "axios";

export default  function Location(props) {
  const [name, setName] = useState("");
  const [locationLat, setLocationLat] = useState({})
  const [locationLng, setLocationLng] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
  };

 

  return (
    <main className="location">
      <div className="location--name"> WELCOME!</div>
      <form className="location--form" onSubmit={handleSubmit}>
        <label>
          Before we begin, please enter the location or area you would like to
          start the trip:
          <div className="location--textbox">
            <input
              autoFocus
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </label>
        <div>
        <button className="location--button" onClick={async () =>  {await props.locationSearch(name);}}>Select</button>
        </div>
      </form>
    </main>
  );
}


