import React from 'react';
import covidTracker from "../../assets/covid-tracker.PNG";
import restaurateur from "../../assets/restaurateur.PNG";
import shopshop from "../../assets/shopshop-screenshot.PNG";
import techMatchup from "../../assets/tech-matchup-screenshot.PNG";
import healthcareHero from "../../assets/healthcare-hero.PNG"

function Project() {

    return (
        <section className="container pb-5">
            <h1 id="projects" className="title is-size-1 my-6 pb-3 has-text-centered">Projects</h1>

            <div className="tile is-ancestor animate__animated animate__fadeInDown">
                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <a href="https://intense-inlet-07195.herokuapp.com/" target="_blank" rel="noreferrer">
                            <figure className="image">
                                <img src={restaurateur} alt="restaurateur" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2">Restaurateur</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Project Manager</p>
                        <p className="is-size-5 my-1 has-text-centered">MERN-stack single-page application that provides
                            resources and instructions for aspiring entrepreneurs who want to open a new restaurant business.</p>
                        <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                            React, GraphQL, Apollo, Node.js, MongoDB, Mongoose, JWT, Bootstrap, SPA</p>
                        <figure className="image is-48x48 mx-auto my-2">
                            <a href="https://github.com/Muzan67/restaurateur.git" target="_blank" rel="noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="Github icon" />
                            </a>
                        </figure>
                    </div>
                </div>

                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <a href="https://radiant-reaches-92570.herokuapp.com/" target="_blank" rel="noreferrer">
                            <figure className="image">
                                <img src={healthcareHero} alt="Huxley the HealthCare Hero" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2">Healthcare Hero</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Lead Developer</p>
                        <p className="is-size-5 my-1 has-text-centered">Interactive full-stack application that allows
                            healthcare providers to share their service information on a public forum.</p>
                        <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                            Node.js, Express, MySQL, Sequelize, MVC, Authentication, Handlebars</p>
                        <figure className="image is-48x48 mx-auto my-2">
                            <a href="https://github.com/randiferous/healthcare-hero.git" target="_blank" rel="noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="GitHub icon" />
                            </a>
                        </figure>
                    </div>
                </div>
            </div>

            <div className="tile is-ancestor mb-6 animate__animated animate__fadeInDown">
                <div className="tile is-5 is-parent">
                    <div className="tile is-child box">
                        <a href="https://randiferous.github.io/group-covid-project/" target="_blank" rel="noreferrer">
                            <figure className="image">
                                <img src={covidTracker} alt="Group Project: COVID-19 tracker" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2 ">COVID-19 Tracker</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Project Manager</p>
                        <p className="is-size-5 my-1 has-text-centered">Front-end application that provides up-to-date COVID-19
                            data as well as general information on a country basis.</p>
                        <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                            HTML, CSS, JavaScript, Responsive Design, GitHub, RESTful APIs</p>
                        <figure className="image is-48x48 mx-auto my-2">
                            <a href="https://github.com/randiferous/group-covid-project" target="_blank" rel="noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="Group COVID Project GitHub" />
                            </a>
                        </figure>
                    </div>
                </div>

                <div className="tile is-7 is-vertical is-parent">
                    <div className="tile is-child box columns">
                        <div className="column is-6 my-auto">
                            <a href="https://peaceful-springs-45091.herokuapp.com/" target="_blank" rel="noreferrer">
                                <figure className="image" id="shop-shop">
                                    <img src={shopshop} alt="Shop-Shop" />
                                </figure>
                            </a>
                        </div>
                        <div className="column is-6">
                            <h3 className="has-text-centered is-size-3">Shop-Shop</h3>
                            <p className="has-text-centered is-size-6">E-commerce application built with the MERN-stack that allows authenticated users to add products to a shopping cart and purchase them.</p>
                            <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-1">Featured:
                                React, MongoDB, GraphQL, Stripe, JWT, Node.js</p>
                            <figure className="image is-48x48 mx-auto my-2">
                                <a href="https://github.com/randiferous/shop-shop.git" target="_blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub icon" />
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-child box columns">
                        <div className="column is-6 my-auto">
                            <a href="https://infinite-caverns-98317.herokuapp.com/" target="_blank" rel="noreferrer">
                                <figure className="image">
                                    <img src={techMatchup} alt="Tech-Matchup" />
                                </figure>
                            </a>
                        </div>
                        <div className="column is-6">
                            <h3 className="has-text-centered is-size-3">Tech Matchup</h3>
                            <p className="has-text-centered is-size-6">MERN-stack application that allows boot camp students to create a matchup between two technologies and vote on their favorite technology.</p>
                            <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-1">Featured:
                                React, GraphQL, Node.js, MongoDB</p>
                            <figure className="image is-48x48 mx-auto my-2">
                                <a href="https://github.com/randiferous/tech-matchup.git" target="_blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="GitHub icon" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Project;