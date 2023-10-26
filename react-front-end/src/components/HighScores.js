import React, { useState, useEffect } from 'react';

function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from the server
    fetch('http://localhost:8080/api/high-scores')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        // Sort the high scores in descending order based on the 'score' property
        const sortedHighScores = data.games.sort((a, b) => b.score - a.score);
        setHighScores(sortedHighScores);
      })
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);

  return (
    <div className="score-box">
      <div className="score-columns">
        {highScores.map((score, index) => (
          <div key={index} className="score-row">
            <span className="player-name">{score.nickname}</span>
            <span className="player-score">{score.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighScores;