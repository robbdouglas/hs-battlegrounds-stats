// Stats.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

function Stats() {
  const { gameData } = useAppContext();

  return (
    <div>
      <h1>Stats</h1>
      <p>Player Name: {gameData && gameData.playerName}</p>
      {/* Weitere Daten anzeigen */}
      <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
}

export default Stats;
