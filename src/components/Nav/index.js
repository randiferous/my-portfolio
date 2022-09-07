import React from 'react';

function Nav() {

    return (
        <section className="hero is-medium is-black">
            <div className="hero-head">
            <nav className="navbar">
                <a id="navbar-name" className="navbar-brand has-text-white is-size-1 my-4 mx-6 has-text-centered"
                    href="/">Daniel Y. Lee</a>
                <div id="navbar-sections" className="navbar-end px-6 is-flex is-flex-direction-row">
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" href="#about-me">About</a>
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" href="#projects">Projects</a>
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" href="#contact">Contact</a>
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" href="#resume">Resume</a>
                </div>
            </nav>
            </div>
        </section>
    );
}

export default Nav;