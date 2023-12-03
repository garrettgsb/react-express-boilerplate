import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/AuthContext";
import { useState, useEffect, useCallback, useMemo } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Polaroid } from "./Polaroid";
import { getPortfolioHoverPosition } from '../utils';
import { useEntityCardHoverEffect } from "./useEntityCardHoverEffect";
import './EntityCard.css';

import { useLikes } from "../useLikes";
import { useProcessLikesData } from "../../LikeList/likeHooks";

const portfolios = [0, 1];
const entityCardStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "0.5rem",
};

export const EntityCard = ({
  style,
  data,
  isArtists,
  columnIndex,
  likesData
}) => {
  const [isLiked, setLiked] = useState(false);
  const navigate = useNavigate();

  const { loggedInUser, isLoggedIn } = useAuth();
  // const { items, liked, handleLike, handleDislike } = useLikes(isLoggedIn, loggedInUser.id, data);

  const { liked: processedLiked } = useProcessLikesData(likesData, data);

  const {
    isHovering,
    handleMouseEnter,
    handleMouseLeave
  } = useEntityCardHoverEffect();

  useEffect(() => {
    setLiked(processedLiked);
  }, [processedLiked]); // Update when processedLiked changes

  const { handleLike: _handleLike, handleDislike: _handleDislike } = useLikes(
    isLoggedIn,
    loggedInUser?.id,
    data
  );

  const handleLike = useCallback((e) => {
    e.stopPropagation();
    _handleLike();
    setLiked(true);
  }, []);

  const handleDislike = useCallback((e) => {
    e.stopPropagation();
    _handleDislike();
    setLiked(false);
  }, [_handleDislike]);

  const displayName = isArtists ? data.name : data.title;
  const numberOfPortfolios = Math.min(data.images?.length || 0, portfolios.length);
  const portfoliosToShow = useMemo(
    () => portfolios.slice(0, numberOfPortfolios),
    [numberOfPortfolios]
  );

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
        liked={isLiked}
        showLikeButton={!isArtists && isLoggedIn}
        onClickCard={() => {
          navigate(`/${isArtists ? "users" : "projects"}/${data.id}`);
        }}
        isHovering={isHovering}
        hasBack
      />
      {isArtists && portfoliosToShow.map((portfolioNumber) => (
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
