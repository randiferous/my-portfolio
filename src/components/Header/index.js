import React from "react";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import About from '../../components/About';
import Project from '../../components/Project';
import Contact from '../../components/Contact';

function Header () {
        return (
            <Router>
                <header>
                    <Nav />
                </header>

                <div>
                    <Routes>
                        <Route path="/my-portfolio" element={<Navigate replace to="/about" />}/>
                        <Route path="/about" element={<About/>} />
                        <Route path="/projects" element={<Project/>} />
                        <Route path="/contact" element={<Contact/>} />
                    </Routes>
                </div>
            </Router>
        )
}

export default Header;