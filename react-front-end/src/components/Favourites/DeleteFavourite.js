import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

//component to delete a favourite
const DeleteFavourite = () => {
  const [remove, setRemove] = useState([]);

  const { favouriteId } = useParams();

  const history = useHistory();

  const deleteFavourite = () => {
    useEffect(() => {
      axios.delete(`/api/users/:id/${favouriteId}`).then((res) => {
        setRemove(res.data);
      });
    }, []);
  };

  const handleClick = () => {
    history.push("/map");
  };

  return (
    <div className="delete-favourite-container">
      <h1>Delete a Favourite</h1>
      <div className="delete-favourite-header">
        {remove.map((favourite) => (
          <div key={favourite.id}>
            <button onClick={handleClick}>Remove Favourite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteFavourite;
