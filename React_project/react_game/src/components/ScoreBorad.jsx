import React from "react";

const ScoreBoard = ({ score, total }) => {
  return (
    <div className="score-board">
      <h2>Game Over!</h2>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>.
      </p>
      <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  );
};

export default ScoreBoard;
