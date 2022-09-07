import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
    </Router>

  );
}

export default App;
