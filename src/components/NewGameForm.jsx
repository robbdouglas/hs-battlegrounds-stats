// NewGameForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormStatsContainer from "./FormStatsContainer";
import { heroes } from "../data/heroes";
import { tribes } from "../data/tribes";
import { quests } from "../data/quests";
import "../styles/NewGameForm.css";
import ArrowBtn from "./ArrowBtn";

function NewGameForm() {
  const [filter, setFilter] = useState(""); 


  const filteredHeroes = heroes.filter((hero) =>
    hero.toLowerCase().includes(filter.toLowerCase())
  );

  console.log("Number of heroes:", heroes.length);
  console.log("heroes:", heroes);

  return (
    <div>
      <h1>New Game Form</h1>
      <form>
        <div className="label-input-container">
          <div className="player-name-container">
            <div className="input-line">
              <label htmlFor="player-name">Player:</label>
              <input
                type="text"
                id="player-name"
                name="player-name"
                placeholder="Enter your name..."
              />
              <ArrowBtn />
            </div>
          </div>
          <div className="placement-container">
            <div className="input-line">
              <label htmlFor="placement">Placement:</label>

              <input
                type="number"
                id="placement"
                name="placement"
                min="1"
                max="8"
                placeholder="Enter your placement..."
              />
              <ArrowBtn />
            </div>
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
          <div className="quest-container">
            <label htmlFor="quest">Quest:</label>
            <select id="quest" name="quest">
              {quests.map((quest, index) => (
                <option key={index} value={quest}>
                  {quest}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="submit-btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      <FormStatsContainer />
      <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
}

export default NewGameForm;
