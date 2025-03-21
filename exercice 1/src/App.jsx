import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    const scorePercentage = (score / 10) * 100; // Convert score to percentage
    let scoreColor = "#f3bc47"; // Default color (yellow)

    if (score <= 3) {
      scoreColor = "#ff4d4d"; // Red for low scores
    } else if (score >= 7) {
      scoreColor = "#4caf50"; // Green for high scores
    }

    return {
      width: `${scorePercentage}%`,
      backgroundColor: scoreColor,
      height: "20px",
      transition: "width 0.3s ease-in-out",
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>
      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
      />

      <div className="score-bar" style={{ width: "100%", backgroundColor: "#ddd", height: "20px", marginTop: "10px" }}>
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
