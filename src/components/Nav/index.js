import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

    return (
            <nav className="navbar is-dark is-medium">
                <NavLink id="navbar-name" className="navbar-brand has-text-white is-size-1 my-4 mx-6 has-text-centered"
                    to="/my-portfolio">Daniel Y. Lee</NavLink>
                <div id="navbar-sections" className="navbar-end px-6 is-flex is-flex-direction-row">
                    <NavLink className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/about">About</NavLink>
                    <NavLink className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/projects">Portfolio</NavLink>
                    <NavLink className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/contact">Contact</NavLink>
                </div>
            </nav>
    );
}

export default Nav;