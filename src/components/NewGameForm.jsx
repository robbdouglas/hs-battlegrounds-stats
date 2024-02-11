// NewGameForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NewGameForm.css";
import { heroes } from "../data/heroes"; 
import { tribes } from "../data/tribes"; 

function NewGameForm() {
  const [filter, setFilter] = useState(""); // Zustand für den Filterwert

  // Filterfunktion für das Dropdown-Menü der Helden
  const filteredHeroes = heroes.filter((hero) =>
    hero.toLowerCase().includes(filter.toLowerCase())
  );

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
              min="1"
              max="8"
              placeholder="Enter your placement..."
            />
          </div>
          <div className="filter-container">
            <label htmlFor="hero-filter">Filter Heroes:</label>
            <input
              type="text"
              id="hero-filter"
              name="hero-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Enter hero name..."
            />
          </div>
          <div className="hero-container">
            <label htmlFor="hero">Hero:</label>
            <select id="hero" name="hero">
              {filteredHeroes.map((hero, index) => (
                <option key={index} value={hero}>
                  {hero}
                </option>
              ))}
            </select>
          </div>
          <div className="tribe-container">
            <label htmlFor="tribe">Tribe:</label>
            <select id="tribe" name="tribe">
              {tribes.map((tribe, index) => (
                <option key={index} value={tribe}>
                  {tribe}
                </option>
              ))}
            </select>
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
