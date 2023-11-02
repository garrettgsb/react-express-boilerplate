// highscores.js
import React, { useState, useEffect } from "react";
import "../style/home.css";
function HighScores() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from the server
    fetch("http://localhost:8080/api/high-scores")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        // Filter out entries with null names
        const filteredHighScores = data.games.filter(
          (score) => score.nickname !== null
        );

        // Sort the high scores first by score in descending order, and then by completion time in ascending order
        const sortedHighScores = filteredHighScores.sort((a, b) => {
          if (b.score !== a.score) {
            // If scores are different, sort by score in descending order
            return b.score - a.score;
          } else {
            // If scores are the same, sort by completion time in ascending order
            return a.completionTime - b.completionTime;
          }
        });

        // Take only the top 20 high scores
        const top20HighScores = sortedHighScores.slice(0, 20);

        setHighScores(top20HighScores);
      })
      .catch((error) => console.error("Error fetching high scores:", error));
  }, []);

  return (
    <div className="score-box">
      <div className="score-columns">
        {highScores.map((score, index) => (
          <div key={index} className="score-row">
            <ul className="list">
              <li className="score">
                <span className="player-name">{score.nickname}</span>
                <span className="player-score">{score.score}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighScores;
