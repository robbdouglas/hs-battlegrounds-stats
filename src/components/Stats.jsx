import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div>
      <h1>Stats Overview</h1>
      <Link to="/">
        <button className="back-to-home">Back to home</button>
      </Link>
    </div>
  );
}

export default Stats;
