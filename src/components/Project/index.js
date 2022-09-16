import React from 'react';
import covidTracker from "../../assets/covid-tracker.PNG";
import huxley from "../../assets/huxley.png";
import restaurateur from "../../assets/restaurateur.PNG";
import techBlog from "../../assets/the_tech_blog.PNG";
import weatherDashboard from "../../assets/weather-dashboard.PNG";

function Project() {

    return (
    <section className="container pb-5">
        <h1 id="projects" className="title is-size-1 my-6 pb-3 has-text-centered">Projects</h1>

        <div className="tile is-ancestor animate__animated animate__fadeInDown">
            <div className="tile is-6 is-parent">
                <div className="tile is-child box">
                    <a href="https://intense-inlet-07195.herokuapp.com/" target="_blank" rel="noreferrer">
                        <figure className="image">
                            <img src={restaurateur} alt="restaurateur"/>
                        </figure>
                    </a>
                    <h2 className="title has-text-centered my-2">Restaurateur</h2>
                    <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Project Manager</p>
                    <p className="is-size-5 my-1 has-text-centered">MERN-stack single-page application that provides 
                    resources and instructions for aspiring entrepreneurs who want to open a new restaurant business.</p>
                    <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                        React, GraphQL, Node.js, MongoDB, Mongoose, Express, JWT, Bootstrap</p>
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
                            <img src={huxley} alt="Huxley the HealthCare Hero"/>
                        </figure>
                    </a>
                    <h2 className="title has-text-centered my-2">Healthcare Hero</h2>
                    <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Lead Developer</p>
                    <p className="is-size-5 my-1 has-text-centered">Interactive full-stack application that allows
                        healthcare providers to share their service information on a public forum.</p>
                    <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                        Authentication, MVC, Sequelize, Express, Handlebars, Nodemailer, Heroku</p>
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
                            <img src={covidTracker} alt="Group Project: COVID-19 tracker"/>
                        </figure>
                    </a>
                    <h2 className="title has-text-centered my-2 ">COVID-19 Tracker</h2>
                    <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Role: Project Manager</p>
                    <p className="is-size-5 my-1 has-text-centered">Front-end application that provides up-to-date COVID-19
                        data as well as general information on a country basis.</p>
                    <p className="is-italic has-text-weight-semibold my-1 has-text-centered is-size-6 my-1">Featured:
                        Server-side
                        API, Bulma, GitHub,
                        Responsive Design</p>
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
                        <a href="https://gorgeous-olympic-40961.herokuapp.com/" target="_blank" rel="noreferrer">
                            <figure className="image" id="tech-blog">
                                <img src={techBlog} alt="The Tech Blog"/>
                            </figure>
                        </a>
                    </div>
                    <div className="column is-6">
                        <h3 className="has-text-centered is-size-3">The Tech Blog</h3>
                        <p className="has-text-centered is-size-6">Full-stack application allows authenticated users to
                            create, edit, delete and comment on blog posts.</p>
                        <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-1">Featured:
                            MVC, Handlebars, Sequelize, Express</p>
                        <figure className="image is-48x48 mx-auto my-2">
                            <a href="https://github.com/randiferous/mvc-tech-blog.git" target="_blank" rel="noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="The Tech Blog GitHub" />
                            </a>
                        </figure>
                    </div>
                </div>
                <div className="tile is-child box columns">
                    <div className="column is-6 my-auto">
                        <a href="https://randiferous.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                            <figure className="image">
                                <img src={weatherDashboard} alt="Weather Dashboard Challenge"/>
                            </figure>
                        </a>
                    </div>
                    <div className="column is-6">
                        <h3 className="has-text-centered is-size-3">Weather Dashboard</h3>
                        <p className="has-text-centered is-size-6">When a user searches a city, this application displays
                            current and future weather conditions for that city.</p>
                        <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-1">Featured:
                            Server-side API, Client-side Storage</p>
                        <figure className="image is-48x48 mx-auto my-2">
                            <a href="https://github.com/randiferous/weather-dashboard-challenge.git" target="_blank" rel="noreferrer">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                    alt="Weather Dashboard Project GitHub" />
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