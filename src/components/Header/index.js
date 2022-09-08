import React, { useState } from "react";
import Nav from "../../components/Nav";
import About from '../../components/About';
import Project from '../../components/Project';
import Contact from '../../components/Contact';

function Header() {

    const [currentPage, changeCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />
            case "Projects":
                return <Project />
            case "Contact":
                return <Contact />
            default:
                return <About></About>
        }
    }

return (
    <div>
        <header>
            <Nav currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
        </header>
        <div>
            {renderPage()}
        </div>
    </div>
)
}

export default Header;