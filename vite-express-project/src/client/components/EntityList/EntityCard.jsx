
import { useNavigate } from "react-router-dom";
import likeDislike from "/src/client/hooks/LikeDislike.jsx";
import { useAuth } from "../../hooks/AuthContext";
import { useState, useEffect } from "react";

import { TypeIcon } from './TypeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLikes } from './useLikes';


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


  const { items, liked, handleLike, handleDislike } = useLikes(isLoggedIn, loggedInUser.id, data);

  //   const fetchLikes = async () => {
  //     try {
  //       const updatedLikesResponse = await fetch(
  //         `/api/likes/${loggedInUser.id}`
  //       );
  //       const updatedLikesData = await updatedLikesResponse.json();

  //       let isLiked = false;

  //       if (Array.isArray(updatedLikesData)) {
  //         setItems(updatedLikesData);

  //         isLiked = updatedLikesData.some(
  //           (item) => item.project_id === String(data.id)
  //         );
  //       } else {
  //         const transformedData = Object.keys(updatedLikesData).map(
  //           (key) => updatedLikesData[key]
  //         );
  //         setItems(transformedData);

  //         isLiked = transformedData.some(
  //           (item) => item.project_id === String(data.id)
  //         );
  //       }

  //       setLiked(isLiked);
  //     } catch (error) {
  //       console.error("Error fetching likes:", error);
  //     }
  //   };
  //   useEffect(() => {
  //   if (isLoggedIn) {
  //     fetchLikes();
  //     console.log("fetching likes");
  //   }
  // }, [isLoggedIn, loggedInUser.id]);

  // const handleLike = async () => {
  //   try {
  //     await likeDislike(loggedInUser.id, data.id, "like");
  //     const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
  //     const updatedLikesData = await updatedLikesResponse.json();
  //     if (Array.isArray(updatedLikesData)) {
  //       setItems(updatedLikesData);
  //       setLiked(true);
  //       console.log("like", updatedLikesData);
  //     } else {
  //       const transformedData = Object.keys(updatedLikesData).map(
  //         (key) => updatedLikesData[key]
  //       );
  //       setItems(transformedData);
  //     }
  //   } catch (error) {
  //     // Handle like error
  //     console.error("Error liking item:", error);
  //   }
  // };

  // const handleDislike = async () => {
  //   try {
  //     await likeDislike(loggedInUser.id, data.id, "dislike");
  //     const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
  //     const updatedLikesData = await updatedLikesResponse.json();
  //     if (Array.isArray(updatedLikesData)) {
  //       setItems(updatedLikesData);
  //       setLiked(false);

  //       console.log("dislike", updatedLikesData);
  //     } else {
  //       const transformedData = Object.keys(updatedLikesData).map(
  //         (key) => updatedLikesData[key]
  //       );
  //       setItems(transformedData);
  //     }
  //   } catch (error) {
  //     // Handle dislike error
  //     console.error("Error disliking item:", error);
  //   }
  // };

  const displayName = isArtists ? data.name : data.title;


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
        <footer className="flex justify-between w-full pl-4 pr-3">
          <div className="flex justify-center items-center">
            <TypeIcon isArtists={isArtists} type={isArtists ? data.artist_type : data.type} />
          </div>
          <div className="flex flex-col truncate px-3">
            <span
              className="text-slate-950 truncate"
              style={{
                fontFamily: "'Kalam', cursive",
              }}
            >
              {displayName}
            </span>
            <span
              className="text-gray-400 truncate"
              style={{
                fontFamily: "'Kalam', cursive",
              }}
            >
              {data.location}
            </span>
          </div>
          <aside className="flex justify-end items-center">
            {/* this is only place holder */}

            {!isArtists &&
              isLoggedIn &&
              (liked ? (
                <button onClick={handleDislike}>♥️</button>
              ) : (
                <button onClick={handleLike}>♡</button>
              ))}
              
              {/* <FontAwesomeIcon icon={faHeart} color={displayName.length > 12 ? 'red' : 'gray'}/> */}

          </aside>
        </footer>
      </div>
    </div>
  );
};
