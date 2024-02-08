import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewGameForm.css";

function NewGameForm() {
  return (
    <div>
      <h1>New Game Form</h1>
      <form>
        <div className="label-input-container">
          <div className="player-name-container">
            <label htmlFor="player-name">Player Name:</label>
            <input
              type="text"
              id="player-name"
              name="player-name"
              placeholder="Enter your name..."
            />
          </div>
          <div className="placement-container">
            <label htmlFor="placement">Placement:</label>
            <input
              type="number"
              id="placement"
              name="placement"
              placeholder="Enter your placement..."
            />
          </div>
          <div className="hero-container">
            <label htmlFor="hero">Hero:</label>
            <input
              type="text"
              id="hero"
              name="hero"
              placeholder="Enter your hero..."
            />
          </div>
          <div className="tribe-container">
            <label htmlFor="tribe">Tribe:</label>
            <input
              type="text"
              id="tribe"
              name="tribe"
              placeholder="Enter your tribe..."
            />
          </div>
        </div>
        <div className="submit-btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
}

export default NewGameForm;
