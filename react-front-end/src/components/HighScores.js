import React, { useState, useEffect } from 'react';

function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from the server
    fetch('/api/high-scores')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setHighScores(data.games);
      })
      .catch(error => console.error('Error fetching high scores:', error));
  }, []);
  

  console.log('High Scores State:', highScores); // Add this log to see the state

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


