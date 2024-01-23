import React from "react";
import data from "../data.json";

function Leaderboard() {
  return (
    <div className="score-box">
      <h2>High Score</h2>
      <div className="score-columns">
        {data.highScores.map((score, index) => (
          <div key={index} className="score-row" data-testid="row">
            <span className="player-name" data-testid="name">{score.name}</span>
            <span className="player-score" data-testid="score">{score.score}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard;