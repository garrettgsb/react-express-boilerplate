import { useNavigate } from "react-router-dom";
import likeDislike from "/src/client/hooks/LikeDislike.jsx";
import { useAuth } from "../../hooks/AuthContext";
import { useState, useEffect } from "react";

const entityCardStyle = {
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  paddingTop: "0.5rem",
};

const polaroidStyle = {
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
};

export const EntityCard = ({ style, data, isArtists }) => {
  const navigate = useNavigate();
  const { loggedInUser, isLoggedIn } = useAuth();
  const [items, setItems] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const likesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
        const likesData = await likesResponse.json();

        if (Array.isArray(likesData)) {
          setItems(likesData);
          const isLiked = likesData.some((item) => item.id === data.id); // Check if data.id exists in likesData
          setLiked(isLiked);
        } else {
          const transformedData = Object.keys(likesData).map(
            (key) => likesData[key]
          );
          setItems(transformedData);
          const isLiked = transformedData.some((item) => item.id === data.id); // Check if data.id exists in transformedData
          setLiked(isLiked);
        }
      } catch (error) {
        // Handle fetch error
        console.error("Error fetching likes:", error);
      }
    };

    fetchData(); // Call the fetchData function here
  }, [loggedInUser.id, data.id]);

  const handleLike = async () => {
    try {
      await likeDislike(loggedInUser.id, data.id, "like");
      const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
      const updatedLikesData = await updatedLikesResponse.json();
      if (Array.isArray(updatedLikesData)) {
        setItems(updatedLikesData);
        setLiked(true);
        console.log("like", updatedLikesData);
      } else {
        const transformedData = Object.keys(updatedLikesData).map(
          (key) => updatedLikesData[key]
        );
        setItems(transformedData);
      }
    } catch (error) {
      // Handle like error
      console.error("Error liking item:", error);
    }
  };

  const handleDislike = async () => {
    try {
      await likeDislike(loggedInUser.id, data.id, "dislike");
      const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
      const updatedLikesData = await updatedLikesResponse.json();
      if (Array.isArray(updatedLikesData)) {
        setItems(updatedLikesData);
        setLiked(false);

        console.log("dislike", updatedLikesData);
      } else {
        const transformedData = Object.keys(updatedLikesData).map(
          (key) => updatedLikesData[key]
        );
        setItems(transformedData);
      }
    } catch (error) {
      // Handle dislike error
      console.error("Error disliking item:", error);
    }
  };

  return (
    <div
      className="entity-card-container"
      style={{ ...style, ...entityCardStyle }}
    >
      <div
        className="entity-image-wrapper w-60 h-72 rounded-md"
        style={{
          ...polaroidStyle,
          transform: data.transform,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          paddingTop: "0.5rem",
        }}
      >
        <img
          src={isArtists ? data.profile_picture : data.images[0]}
          alt={data.title}
          title={data.title}
          onClick={() => {
            navigate(`/${isArtists ? "users" : "projects"}/${data.id}`);
          }}
          className="w-56 h-56 object-cover"
        />
        <footer className="flex justify-between w-full">
          <div className="flex pl-5 flex-col w-8/12">
            <span
              className="text-slate-950"
              style={{
                fontFamily: "'Kalam', cursive",
              }}
            >
              {isArtists ? data.name : data.title}
            </span>
            <span
              className="text-gray-400"
              style={{
                fontFamily: "'Kalam', cursive",
              }}
            >
              {data.location}
            </span>
          </div>
          <aside className="flex pr-5 justify-end items-center">
            {/* this is only place holder */}
            {isLoggedIn &&
              (liked ? (
                <button onClick={handleDislike}>♥️</button>
              ) : (
                <button onClick={handleLike}>♡</button>
              ))}
          </aside>
        </footer>
      </div>
    </div>
  );
};
