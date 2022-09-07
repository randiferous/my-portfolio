import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';


function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </div>
    </Router>

  );
}

export default App;
