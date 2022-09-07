import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <section className="hero is-medium is-black">
            <div className="hero-head">
            <nav className="navbar">
                <Link id="navbar-name" className="navbar-brand has-text-white is-size-1 my-4 mx-6 has-text-centered"
                    to="/">Daniel Y. Lee</Link>
                <div id="navbar-sections" className="navbar-end px-6 is-flex is-flex-direction-row">
                    <Link className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/about-me">About</Link>
                    <Link className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/projects">Portfolio</Link>
                    <Link className="navbar-item has-text-white is-size-3 is-size-4-mobile" to="/contact">Contact</Link>
                </div>
            </nav>
            </div>
        </section>
    );
}

export default Nav;