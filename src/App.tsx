import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home-page/home-page";
import Summary from "./components/summary/summary";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Navbar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
