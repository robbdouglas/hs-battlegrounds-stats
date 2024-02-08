// App.jsx
import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NewGameForm from "./components/NewGameForm";
import Stats from "./components/Stats";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/new-game-form" element={<NewGameForm />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<h1>Error 404: Page not found</h1>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
