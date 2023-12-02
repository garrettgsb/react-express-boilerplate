import { useNavigate } from "react-router-dom";
import likeDislike from "/src/client/hooks/LikeDislike.jsx";
import { useAuth } from "../../../hooks/AuthContext";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Polaroid } from "./Polaroid";
import { getPortfolioHoverPosition } from '../utils';
import { useEntityCardHoverEffect } from "./useEntityCardHoverEffect";
import './EntityCard.css';

const portfolios = [2, 1];

const entityCardStyle = {
  display: "flex",
  justifyContent: "center",
  // cursor: "pointer",
  paddingTop: "0.5rem",
};

export const EntityCard = ({
  style,
  data,
  isArtists,
  columnIndex
}) => {
  const { loggedInUser, isLoggedIn } = useAuth();
  const [items, setItems] = useState(false);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  const {
    isHovering,
    showContent,
    handleMouseEnter,
    handleMouseLeave
  } = useEntityCardHoverEffect();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (loggedInUser) {
          const likesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
          const likesData = await likesResponse.json();
  
          if (Array.isArray(likesData)) {
            setItems(likesData);
            const isLiked = likesData.some((item) => item.id === data.id);
            setLiked(isLiked);
          } else {
            const transformedData = Object.keys(likesData).map((key) => likesData[key]);
            setItems(transformedData);
            const isLiked = transformedData.some((item) => item.id === data.id);
            setLiked(isLiked);
          }
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };
  
    fetchData();
  }, [loggedInUser, data.id]);

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

  const displayName = isArtists ? data.name : data.title;

  return (
    <div
      className={"entity-card-container" + (isHovering ? " is-hovering" : "")}
      style={{
        ...style,
        ...entityCardStyle
      }}
    >
      <Polaroid
        data={data}
        location={data.location}
        transform={data.transform}
        zIndex={isHovering ? 20 : 4}
        isArtists={isArtists}
        imgSrc={isArtists ? data.profile_picture : data.images[0]}
        iconType={isArtists ? data.artist_type : data.type}
        handleMouseEnter={isArtists ? handleMouseEnter : undefined}
        handleMouseLeave={isArtists ? handleMouseLeave : undefined}
        displayName={displayName}
        handleLike={handleLike}
        handleDislike={handleDislike}
        liked={liked}
        showLikeButton={!isArtists && isLoggedIn}
        onClickCard={() => {
          navigate(`/${isArtists ? "users" : "projects"}/${data.id}`);
        }}
        isHovering={isHovering}
        hasBack
      />
      {isArtists && portfolios.map((portfolioNumber) => (
        <div className="overlay-container absolute flex"
          style={{
            zIndex: isHovering ? 5 : -10,
            ...(isHovering ? getPortfolioHoverPosition(portfolioNumber, columnIndex) : { left: '50%', transform: 'translateX(-50%)'}),
            transition: 'transform 0.2s, left .5s',
            ...(isHovering ? { transitionDelay: '1s' } : { transitionDelay: '0s'})
          }}
          key={portfolioNumber}
        >
          <Polaroid 
            location={data.location}
            isArtists={isArtists}
            imgSrc={data.images[portfolioNumber]}
            transform={data[`overlayTransform${portfolioNumber}`]}
            displayName={displayName}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            hideFooter
          />
        </div>
      ))}
    </div>
  );
};
