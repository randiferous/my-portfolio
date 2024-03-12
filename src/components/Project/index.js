import React from 'react';
import covidTracker from "../../assets/covid-tracker.PNG";
import restaurateur from "../../assets/restaurateur.PNG";
import invenelogo from "../../assets/invene_logo.png"
import edx_2u from "../../assets/2u_edx.jpg"
import islandersApp from "../../assets/islanders_screenshot.png"

function Project() {

    return (
        <section className="container pb-5">
            <h1 id="projects" className="title is-size-1 my-6 pb-3 has-text-centered">Projects & Work</h1>

            <div className="tile is-ancestor animate__animated animate__fadeInDown">
                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <a href="https://invene.com/" target="_blank" rel="noreferrer" className="is-flex is-justify-content-center margin-lr-15">
                            <figure className="image">
                                <img src={invenelogo} alt="invene logo" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2">Invene</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Software Developer</p>
                        <p className="is-size-5 my-1 has-text-centered">Contributing to products that make the world a better place.
                            Growing daily both in technical skills and professionalism.</p>
                        <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-3">Nov 2022 - Current</p>
                    </div>
                </div>
                <div className="tile is-6 is-parent">
                    <div className="tile is-child box">
                        <a href="https://main.d3qkckjntengrs.amplifyapp.com" target="_blank" rel="noreferrer">
                            <figure className="image mt-6">
                                <img src={islandersApp} alt="Islanders app screenshot" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2 mt-5">Isles Hockey</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Individual Developer</p>
                        <p className="is-size-5 my-1 has-text-centered">React application using AWS services for deployment and storage, 
                        that provides real-time information about the New York Islanders professional sports team.</p>
                        <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                            <p className="is-italic has-text-weight-semibold px-3 my-1 has-text-centered is-size-6">Oct 2023</p>
                            <figure className="image is-48x48 my-2">
                                <a href="https://github.com/randiferous/sports-app" target="_blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="Github icon" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tile is-ancestor mb-6 animate__animated animate__fadeInDown">
                <div className="tile is-5 is-parent">
                    <div className="tile is-child box">
                        <a href="https://intense-ravine-89236.herokuapp.com/" target="_blank" rel="noreferrer">
                            <figure className="image">
                                <img src={restaurateur} alt="restaurateur" />
                            </figure>
                        </a>
                        <h2 className="title has-text-centered my-2 ">Restaurateur</h2>
                        <p className="is-size-5 has-text-weight-semibold has-text-centered">Lead Developer</p>
                        <p className="is-size-5 my-1 has-text-centered">MERN-stack single-page application that provides
                            resources and instructions for aspiring entrepreneurs who want to open a new restaurant business.</p>
                        <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                            <p className="is-italic has-text-weight-semibold px-3 my-1 has-text-centered is-size-6">Sept 2022</p>
                            <figure className="image is-48x48 my-2">
                                <a href="https://github.com/randiferous/restaurateur" target="_blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt="Github icon" />
                                </a>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="tile is-7 is-vertical is-parent">
                    <div className="tile is-child box columns">
                        <div className="column is-6 my-auto">
                            <a href="https://2u.com/" target="_blank" rel="noreferrer">
                                <figure className="image" id="shop-shop">
                                    <img src={edx_2u} alt="2U edx" />
                                </figure>
                            </a>
                        </div>
                        <div className="column is-6">
                            <h3 className="has-text-centered is-size-3">2U</h3>
                            <p className="is-size-5 has-text-weight-semibold has-text-centered">TA, Web Development</p>
                            <p className="has-text-centered is-size-6">Teaching Assistant for UK Skills for Life and edX Full-Stack Coding bootcamps.
                            </p>
                            <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 my-3">Sept 2022 - July 2023</p>
                        </div>
                    </div>
                    <div className="tile is-child box columns">
                        <div className="column is-6 my-auto">
                            <a href="https://randiferous.github.io/group-covid-project/" target="_blank" rel="noreferrer">
                                <figure className="image">
                                    <img src={covidTracker} alt="Group Project: COVID-19 tracker" />
                                </figure>
                            </a>
                        </div>
                        <div className="column is-6">
                            <h3 className="has-text-centered is-size-3">COVID-19 Tracker</h3>
                            <p className="is-size-5 has-text-weight-semibold has-text-centered">Team Lead</p>
                            <p className="has-text-centered is-size-6">Front-end application that provides up-to-date COVID-19
                            data as well as general information on a country basis.  My first group project ever!</p>
                            <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
                                <p className="is-italic has-text-weight-semibold has-text-centered is-size-6 px-3 my-1">May 2022</p>
                                <figure className="image is-48x48 my-2">
                                    <a href="https://github.com/randiferous/group-covid-project" target="_blank" rel="noreferrer">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="Group COVID Project GitHub" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Project;