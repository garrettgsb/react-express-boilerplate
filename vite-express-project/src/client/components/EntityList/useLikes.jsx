import { useEffect, useState } from "react";
import likeDislike from "/src/client/hooks/LikeDislike.jsx";

export const useLikes = (isLoggedIn, loggedInUserId, data) => {
  const [items, setItems] = useState([]);
  const [liked, setLiked] = useState(false);

  const fetchLikes = async () => {
    try {
      const loggedInUser = { id: loggedInUserId };
      const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
      const updatedLikesData = await updatedLikesResponse.json();

      let isLiked = false;

      if (Array.isArray(updatedLikesData)) {
        setItems(updatedLikesData);
        isLiked = updatedLikesData.some(
          (item) => item.project_id === String(data.id)
        );
      } else {
        const transformedData = Object.values(updatedLikesData);
        setItems(transformedData);
        isLiked = transformedData.some(
          (item) => item.project_id === String(data.id)
        );
      }

      setLiked(isLiked);
    } catch (error) {
      console.error("Error fetching likes:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchLikes();
      console.log("fetching likes");
    }
  }, [isLoggedIn, loggedInUserId, data.id]);
  const handleLike = async () => {
    try {
      await likeDislike(loggedInUserId, data.id, "like");
      await fetchLikes();
    } catch (error) {
      console.error("Error liking item:", error);
    }
  };

  const handleDislike = async () => {
    try {
      await likeDislike(loggedInUserId, data.id, "dislike");
      await fetchLikes();
    } catch (error) {
      console.error("Error disliking item:", error);
    }
  };

  return { items, liked, handleLike, handleDislike };
};

export default useLikes;
