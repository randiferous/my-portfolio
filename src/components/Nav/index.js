import React from 'react';

function Nav(props) {

    return (
            <nav className="navbar is-medium">
                <a id="navbar-name" className="navbar-brand has-text-white is-size-1 my-4 mx-6 has-text-centered" onClick={() => props.changeCurrentPage("About")}
                    href="#my-portfolio">Daniel Y. Lee</a>
                <div id="navbar-sections" className="navbar-end px-6 is-flex is-flex-direction-row">
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" onClick={() => props.changeCurrentPage("About")} href="#about">About</a>
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" onClick={() => props.changeCurrentPage("Projects")} href="#projects">Portfolio</a>
                    <a className="navbar-item has-text-white is-size-3 is-size-4-mobile" onClick={() => props.changeCurrentPage("Contact")} href="#contact">Contact</a>
                </div>
            </nav>
    );
}

export default Nav;