// LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Hearthstone Battlegrounds Statistics</h1>
      <Link to="/new-game-form">
        <button className="new-game-btn">New Game</button>
      </Link>
      <Link to="/stats">
        <button className="stats-btn">Stats</button>
      </Link>
    </div>
  );
}

export default LandingPage;
