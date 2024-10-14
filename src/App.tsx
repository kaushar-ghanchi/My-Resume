import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home-page/home-page";
import Summary from "./components/summary/summary";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Navbar from "./components/nav-bar/nav-bar";
import { MainAppContainer } from "./styled";

function App() {
  return (
    <div className="App">
      <MainAppContainer>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainAppContainer>
    </div>
  );
}

export default App;
