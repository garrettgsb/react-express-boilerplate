// highscores.js
import React, { useState, useEffect } from 'react';

function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from the server
    fetch('http://localhost:8080/api/high-scores')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        
        // Filter out entries with null names
        const filteredHighScores = data.games.filter(score => score.nickname !== null);
        
        // Sort the high scores in descending order based on the 'score' property
        const sortedHighScores = filteredHighScores.sort((a, b) => b.score - a.score);
        
        // Take only the top 20 high scores
        const top20HighScores = sortedHighScores.slice(0, 20);
        
        setHighScores(top20HighScores);
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

