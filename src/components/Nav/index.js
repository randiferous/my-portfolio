import React from 'react';

function Nav(props) {
    return (
            <nav className="navbar is-medium padding-t-1px">
                <a id="navbar-name" className="navbar-brand has-text-white is-size-1 my-4 mx-6 has-text-centered" onClick={() => props.changeCurrentPage("About")}
                    href="#my-portfolio">Daniel Y. Lee</a>
                <div id="navbar-sections" className="navbar-end px-6 is-flex is-flex-direction-row">
                    <a className={`navbar-item has-text-white is-size-3 is-size-4-mobile ${props.currentPage === "About" ? "is-underlined" : ""}`} 
                        onClick={() => props.changeCurrentPage("About")} href="#about">About</a>
                    <a className={`navbar-item has-text-white is-size-3 is-size-4-mobile ${props.currentPage === "Projects" ? "is-underlined" : ""}`} 
                        onClick={() => props.changeCurrentPage("Projects")} href="#projects">Work</a>
                    <a className={`navbar-item has-text-white is-size-3 is-size-4-mobile ${props.currentPage === "Contact" ? "is-underlined" : ""}`} 
                        onClick={() => props.changeCurrentPage("Contact")} href="#contact">Contact</a>
                </div>
            </nav>
    );
}

export default Nav;