import { useState, useEffect } from 'react';

export const useFetchLikesData = (loggedInUserId) => {
  const [likesData, setLikesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching likes data...');
        const loggedInUser = { id: loggedInUserId };
        const updatedLikesResponse = await fetch(`/api/likes/${loggedInUser.id}`);
        const data = await updatedLikesResponse.json();
        setLikesData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [loggedInUserId]);

  return { likesData, error };
};

export const useProcessLikesData = (likesData, currentItem) => {
  const [items, setItems] = useState([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let isLiked = false;
    let processedItems = [];

    if (Array.isArray(likesData)) {
      processedItems = likesData;
      isLiked = likesData.some((item) => item.project_id === String(currentItem.id));
    } else if (likesData !== null && typeof likesData === 'object') {
      const transformedData = Object.values(likesData);
      processedItems = transformedData;
      isLiked = transformedData.some((item) => item.project_id === String(currentItem.id));
    }

    setItems(processedItems);
    setLiked(isLiked);
  }, [likesData, currentItem]);

  return { items, liked };
};