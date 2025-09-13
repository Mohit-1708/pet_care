import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeVaccination from "./components/vaccination/HomeVaccination"; 
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home-vaccination" element={<HomeVaccination />} />
      </Routes>
    </Router>
  );
}

export default App;
