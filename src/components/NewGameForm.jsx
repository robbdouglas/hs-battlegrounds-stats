import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewGameForm() {


  return (
    <div>
      <h1>New Game Form</h1>
        <form>
            <label htmlFor="player-name">Player Name:</label>
            <input type="text" id="player-name" name="player-name" placeholder="Enter your name..."/>
            <label htmlFor="hero">Hero:</label>
            <input type="text" id="hero" name="hero" placeholder="Enter your hero..."/>
            <label htmlFor="placement">Placement:</label>
            <input type="number" id="placement" name="placement" placeholder="Enter your placement..."/>
            <label htmlFor="tribe">Tribe:</label>
            <input type="text" id="tribe" name="tribe" placeholder="Enter your tribe..."/>
            <button type="submit">Submit</button>
        </form>
        <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
}

export default NewGameForm;
