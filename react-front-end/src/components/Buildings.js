import React from "react";
import { useEffect, useState } from "react";

export default function Buildings() {
  const [intialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setInitialState(jsonResponse));
  }, []);

  return (
    <div>{intialState.length > 0 && intialState.map((e) => <li>{e}</li>)}</div>
  );
}
