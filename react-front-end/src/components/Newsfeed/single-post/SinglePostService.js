import axios from 'axios';

/**
 * Submit like for give post and return a Promise
 * 
 * @param {*} number_of_likes 
 * @param {*} post_id 
 * @returns 
 */
export const likePost = (number_of_likes, post_id, ) => {
  const requestBody = {
    number_of_likes: number_of_likes,
    post_id: post_id
  };
  return axios.put('/api/posts/', requestBody);
};