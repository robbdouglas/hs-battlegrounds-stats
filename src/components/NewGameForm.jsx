import React, { useState } from "react";

function NewGameForm() {


  return (
    <div>
      <h1>New Game Form</h1>
        <form>
            <label htmlFor="player-name">Player Name</label>
            <input type="text" id="player-name" name="player-name" />
            <label htmlFor="hero">Hero</label>
            <input type="text" id="hero" name="hero" />
            <label htmlFor="placement">Placement</label>
            <input type="number" id="placement" name="placement" />
            <label htmlFor="tribe">Tribe</label>
            <input type="text" id="tribe" name="tribe" />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default NewGameForm;
