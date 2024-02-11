import React from "react";
import "../styles/FormStatsContainer.css";

function FormStatsContainer() {
  return (
    <div className="form-stats-container">
      <p className="player-input-value">Player Name: </p>
      <p className="placement-input-value">Placement: </p>
      <p className="hero-input-value">Hero: </p>
      <p className="tribe-input-value">Tribe: </p>
    </div>
  );
}

export default FormStatsContainer;
