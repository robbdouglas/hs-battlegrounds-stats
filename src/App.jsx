// App.jsx

import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NewGameForm from "./components/NewGameForm"; // Annahme: Die Komponente NewGameForm existiert bereits
import Stats from "./components/Stats"; // Annahme: Die Komponente Stats existiert bereits

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new-game-form" element={<NewGameForm />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
