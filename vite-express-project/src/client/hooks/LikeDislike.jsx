const likeDislike = async (userID, projectID, action) => {
  try {
    if (action === 'like') {
      await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID, project_id: projectID }),
      });
    } else if (action === 'dislike') {
      await fetch(`/api/likes?userID=${userID}&project_id=${projectID}`, {
        method: 'DELETE',
      });
    }

  } catch (error) {
    console.error('Error occurred:', error);
  }
};

export default likeDislike;