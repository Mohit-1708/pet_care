import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeVaccination from "./components/HomeVaccination"; // New page
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home-vaccination" element={<HomeVaccination />} />
      </Routes>
    </Router>
  );
}

export default App;
