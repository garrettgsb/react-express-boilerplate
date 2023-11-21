import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/AuthContext";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const { isLoggedIn, user, setUser } = useAuth;
  const userID = localStorage.getItem("user_id");

  useEffect(() => {
    // Fetching data from a JSON output
    fetch(`/api/likes/${userID}`, console.log(user))
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          // transform object into an array
          const transformedData = Object.keys(data).map((key) => data[key]);
          setItems(transformedData);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Items List</h1>

      <ul>
        {console.log(items)}
        {items.map((item) => (
          <li key={item.id}>
            <p>
              <a href={`/project/${item.project_id}`}>Project 1</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
