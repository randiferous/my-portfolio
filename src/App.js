import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <main>
          <Routes>
            <Route path="/my-portfolio" element={<About />} />
            <Route path="my-portfolio/about-me" element={<About />} />
            <Route path="my-portfolio/projects" element={<Project />} />
            <Route path="my-portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
